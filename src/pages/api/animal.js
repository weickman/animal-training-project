
import createAnimal from "../../../server/mongodb/actions/createAnimal";
import readAnimal from "../../../server/mongodb/actions/readAnimal";
import verifyUser from "../../../server/mongodb/actions/verifyUser";
import checkMethod from "../../../server/utils/checkMethod"


export default async function handler(req, res) {
    if(verifyUser(req, res)) {
        try {
            checkMethod(["POST"], req.method)
            await createAnimal(req.body)
        } catch (e) {
            return res.status(500).json({success: false, message: e.message})
        }
        return res.status(201).json({success: true, message: "Successfully created an animal"})
    } else {
        return res.status(403).send("Please login")
    }
}

// - (7) Create a GET endpoint at `/api/admin/animals` which will return all of the animals in the database
// - (8) Create a GET endpoint at `/api/admin/training` which will return all of the training logs in the database
// - Response:
//     - **Status 200 (Success):** If we are able to retrieve the users/animals/training logs
//     - **Status 500**: For any other errors
// - **Note:** These endpoints must implement pagination -- ideally using the document IDs or some other property that has natural ordering (i.e. take a look at approach 2 in this [article](https://www.codementor.io/@arpitbhayani/fast-and-efficient-pagination-in-mongodb-9095flbqr))
// - (9) We want to create a resuable middleware function that takes in an `allowedMethods` array of strings i.e. `['POST', 'GET', 'DELETE']` and a `method` string with the current method being used in the request. This function should check if `method` is in `allowedMethods`
// - Response
//     - **Status 400**: If the request `method` is not in `allowedMethods`
//     - **return NextResponse.next()** - let the request through
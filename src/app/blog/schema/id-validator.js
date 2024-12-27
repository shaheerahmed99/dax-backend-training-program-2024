import z from 'zod';
import mongoose from 'mongoose'

const ObjectId = z.object({
    id: z.string().refine((val) => {
      return mongoose.Types.ObjectId.isValid(val)
    },{
        message:"mongodb ID is not valid"
    })
});

export { ObjectId };
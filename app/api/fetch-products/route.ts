import { connectDB } from "../db/connectdb";
import Product from "../models/productmodels";




export async function GET(request: Request) {
  await connectDB();

  try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    return Response.json({ products }, { status: 200 });
  } catch (error: unknown) {
    console.log("Error in fetching products");

    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 400 });
    }
    return Response.json({ message: "An unknown error occurred" }, { status: 400 });
  }
}
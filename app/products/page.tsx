import AddProcuct from "./addProcuct";
import DeleteProduct from "./deleteProduct";
import UpdateProcuct from "./updateProduct";

type Product = {
  id: number;
  title: string;
  price: number;
}

async function getProducts() {
  const res = await fetch('https://3baa-103-133-70-181.ngrok-free.app/products', {cache: 'no-store'});
  return res.json();
}

export default async function ProductList() {
  const products: Product[] = await getProducts();
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddProcuct/>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
                <td>{index+1}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <UpdateProcuct {...product}/>
                  <DeleteProduct {...product}/>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
 
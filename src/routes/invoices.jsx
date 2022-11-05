import { Link, Outlet} from "react-router-dom";
import { getInvoices } from "../data";
 
export default function Invoices() {
  let invoices = getInvoices(); {/* import invoice data */}
  return (
    <div style={{ display: "flex" }}>
      <nav>
        {/* iterate through all invoices */}
            {invoices.map((invoice) => (
            <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`/invoices/${invoice.number}`} 
                key={invoice.number}
            >
                {invoice.name}
            </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}

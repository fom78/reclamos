import Link from "next/link";
import Layout from "../components/Layout";

const custom404 = () => (
  <Layout title="Pagina no encontrada">
    <div className="text-center">
      <h1 className="display-1">404</h1>
      <p>
        Esta pagina no existe. Por favor regrese a{" "}
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default custom404;

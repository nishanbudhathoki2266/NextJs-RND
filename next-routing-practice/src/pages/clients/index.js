import Link from "next/link";
import React from "react";

const ClientsPage = () => {
  const clients = [
    { id: "nishan", name: "Nishan Budhathoki" },
    { id: "max", name: "Maximillian Thapa" },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;

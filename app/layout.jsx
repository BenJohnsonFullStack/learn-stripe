import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import { Container } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stripe App",
  description: "Learning to integrate Stripe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <Navigation />
        </Container>
        {children}
      </body>
    </html>
  );
}

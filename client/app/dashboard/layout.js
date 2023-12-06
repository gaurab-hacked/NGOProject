import PageContent from "./common/components/PageContent";

export const metadata = {
  title: "Ecommerce desktop",
  description: "Creating ecommerce desktop",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <PageContent children={children} />
    </div>
  );
}

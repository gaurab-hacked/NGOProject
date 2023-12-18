import PageContent from "./common/components/PageContent";

export const metadata = {
  title: "DES desktop",
  description: "Creating DES desktop",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <PageContent>{children}</PageContent>
    </div>
  );
}

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocation } from "react-router";

function BreadCrumb() {
  const location = useLocation();
  const path = location.pathname;
  // console.log(path);

  function returnPathname() {
    switch (path) {
      case "/":
        return ["Dashboard", "My Priority"];
      case "/ask-ai":
        return ["General", "Ask AI"];
      case "/summary":
        return ["General", "Ask AI", "Generated Summary"];
      case "/calendar":
        return ["Dashboard", "My Calendar"];
      case "/contracts":
        return ["Dashboard", "My Bookmarks", "Contracts"];
      case "/documents":
        return ["Dashboard", "My Bookmarks", "Documents"];
      case "/business-area":
        return ["Business Area Dashboard", "My Priority"];
      case "/pipeline/document":
        return ["Business Area Dashboard", "Pipeline", "Document"];
      case "/pipeline/renewal":
        return ["Business Area Dashboard", "Pipeline", "Renewal"];
      default:
        return [];
    }
  }

  const breadcrumbs = returnPathname();

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.map((crumb, index) => (
            <BreadcrumbItem key={index}>
              {index !== breadcrumbs.length - 1 ? (
                <>
                  <BreadcrumbLink>{crumb}</BreadcrumbLink>
                  <BreadcrumbSeparator />
                </>
              ) : (
                <BreadcrumbPage>{crumb}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}

export default BreadCrumb;

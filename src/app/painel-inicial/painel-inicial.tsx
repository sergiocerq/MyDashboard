import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../sidebar/app-sidebar";

export const PainelInicial = () => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-20 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb className="top-0 stroke-lime-50">
                <BreadcrumbList>
                  <BreadcrumbItem className="md:block text-md md:text-lg">
                    {/* <BreadcrumbLink
                      className="flex items-center justify-center gap-3 "
                    >
                    </BreadcrumbLink> */}
                      Home
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="md:block" />
                  <BreadcrumbItem className="md:block text-md md:text-lg">
                    <BreadcrumbLink
                      className="flex items-center justify-center gap-3 "
                    >
                      Painel Inicial
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

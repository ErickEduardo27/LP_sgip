import { createFileRoute } from "@tanstack/react-router";
import { Header, Hero, ProblemSection, SolutionSection, AISection, ReconciliationSection, Features, DashboardPreview, MobileAppSection, Pricing, Implementation, Industries, Security, Results, FAQ, FinalCTA, Footer, RequestDialog } from "@/components/sgip-sections";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "SGIP por egora — Gestión Patrimonial Inteligente" },
    { name: "description", content: "SGIP, un producto de egora, centraliza el inventario físico, Margesí, responsables, ubicaciones, evidencias y conciliaciones en una sola plataforma." },
    { property: "og:title", content: "SGIP por egora — Gestión Patrimonial Inteligente" },
    { property: "og:description", content: "Centraliza el inventario físico, Margesí, responsables, ubicaciones, evidencias y conciliaciones." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return <><Header/><main><Hero/><ProblemSection/><SolutionSection/><AISection/><ReconciliationSection/><Features/><DashboardPreview/><MobileAppSection/><Pricing/><Implementation/><Industries/><Security/><Results/><FAQ/><FinalCTA/></main><Footer/><RequestDialog/></>;
}

import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

// Legal facts shown in the policy: confirm them with egora before publishing the app.
const COMPANY = "egora";
const COMPANY_LEGAL_NAME = "egora";
const CONTACT_EMAIL = "info@egora.pe";
const SITE_URL = "https://sgip.egora.pe";
const LAST_UPDATED = "3 de octubre de 2026";
const DELETION_DAYS = 30;
const CONTRACT_END_DAYS = 90;
const LEADS_RETENTION_MONTHS = 24;

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad — SGIP por egora" },
      { name: "description", content: "Cómo la aplicación SGIP y el sitio sgip.egora.pe recopilan, usan, comparten y protegen los datos personales de sus usuarios." },
      { property: "og:title", content: "Política de privacidad — SGIP por egora" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacidad` }],
  }),
  component: PrivacyPolicy,
});

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border pt-8">
      <h2 className="text-xl font-extrabold text-navy sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-navy-light">{children}</div>
    </section>
  );
}

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-md border border-border">
      <table className="w-full min-w-[560px] text-left text-xs leading-6">
        <thead className="bg-soft text-navy">
          <tr>{head.map((h) => <th key={h} className="px-4 py-3 font-bold">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border align-top">
              {row.map((cell, j) => <td key={j} className={`px-4 py-3 ${j === 0 ? "font-semibold text-navy" : ""}`}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const Mail = () => <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-primary underline">{CONTACT_EMAIL}</a>;

const toc = [
  ["alcance", "1. Quiénes somos y alcance"],
  ["resumen", "2. Resumen"],
  ["datos", "3. Datos que recopilamos"],
  ["permisos", "4. Permisos de la aplicación"],
  ["uso", "5. Cómo usamos los datos"],
  ["compartir", "6. Con quién compartimos los datos"],
  ["transferencias", "7. Transferencias internacionales"],
  ["seguridad", "8. Seguridad"],
  ["conservacion", "9. Conservación"],
  ["eliminar-cuenta", "10. Eliminación de cuenta y datos"],
  ["derechos", "11. Tus derechos"],
  ["menores", "12. Menores de edad"],
  ["sitio-web", "13. Sitio web y cookies"],
  ["cambios", "14. Cambios a esta política"],
  ["contacto", "15. Contacto"],
] as const;

function PrivacyPolicy() {
  return (
    <>
      <header className="border-b border-border bg-background">
        <div className="sg-container flex h-[76px] items-center justify-between gap-5">
          <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="egora, producto SGIP">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-navy text-base font-extrabold text-primary-foreground">e<span className="text-sky">.</span></span>
            <span className="leading-tight"><strong className="block text-[19px] font-extrabold text-navy">egora</strong><small className="block text-[9px] font-semibold text-muted-foreground">SGIP · Gestión Patrimonial</small></span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-xs font-semibold text-navy-light hover:text-primary"><ArrowLeft size={14} /> Volver al inicio</Link>
        </div>
      </header>

      <main className="bg-background py-14">
        <article className="sg-container max-w-3xl space-y-8">
          <div>
            <div className="sg-eyebrow mb-4">Legal</div>
            <h1 className="sg-title">Política de privacidad de SGIP</h1>
            <p className="mt-4 text-xs font-semibold text-muted-foreground">Última actualización: {LAST_UPDATED}</p>
            <p className="sg-copy mt-6 text-sm">
              Esta política explica cómo {COMPANY} recopila, usa, comparte, protege y elimina los datos personales cuando utilizas la aplicación móvil <strong>SGIP – Gestión Patrimonial Inteligente</strong> para Android (distribuida en Google Play), la plataforma web de SGIP y el sitio <a href={SITE_URL} className="font-semibold text-primary underline">sgip.egora.pe</a>. Se elaboró conforme a la Ley N.° 29733, Ley de Protección de Datos Personales del Perú, su reglamento, y la política de Datos de Usuario de Google Play.
            </p>
          </div>

          <nav aria-label="Contenido" className="sg-panel p-5">
            <div className="text-xs font-bold text-navy">Contenido</div>
            <ol className="mt-3 grid gap-1.5 text-xs sm:grid-cols-2">
              {toc.map(([id, label]) => <li key={id}><a href={`#${id}`} className="text-navy-light hover:text-primary">{label}</a></li>)}
            </ol>
          </nav>

          <Section id="alcance" title="1. Quiénes somos y alcance">
            <p>SGIP es un producto de {COMPANY_LEGAL_NAME} (en adelante, “{COMPANY}”, “nosotros”), una plataforma para que entidades públicas y organizaciones privadas realicen el inventario físico de sus bienes patrimoniales, lo concilien con su registro contable (Margesí) y mantengan la trazabilidad de responsables, ubicaciones y evidencias.</p>
            <p>SGIP es una herramienta de uso institucional: las cuentas de usuario las crea la organización que contrata el servicio (la “Organización cliente”) para su personal o para las personas que realizan el inventario en su nombre.</p>
            <List items={[
              <>Respecto de los datos que la Organización cliente registra en SGIP (inventario, responsables, ubicaciones, fotografías), la Organización cliente es la <strong>titular del banco de datos y responsable del tratamiento</strong>, y {COMPANY} actúa como <strong>encargado del tratamiento</strong>, siguiendo sus instrucciones y el contrato de servicio.</>,
              <>Respecto de los datos de cuenta, los datos técnicos de la aplicación y los datos enviados en el formulario del sitio web, {COMPANY} es el <strong>responsable del tratamiento</strong>.</>,
            ]} />
          </Section>

          <Section id="resumen" title="2. Resumen">
            <List items={[
              "Recopilamos solo los datos necesarios para que SGIP funcione: datos de cuenta, datos del inventario, fotografías de los bienes, ubicación al registrar un bien y datos técnicos del dispositivo.",
              "La cámara y la ubicación se usan únicamente cuando realizas una acción que las requiere (escanear un código, fotografiar un bien o validar su ubicación). No accedemos a la ubicación en segundo plano.",
              "No vendemos datos personales, no mostramos publicidad, no usamos el identificador de publicidad y no compartimos datos con fines publicitarios.",
              "Compartimos datos solo con la Organización cliente y con proveedores que nos ayudan a prestar el servicio (alojamiento en la nube, inteligencia artificial y OCR, comunicaciones), o cuando la ley lo exige.",
              "Todos los datos viajan cifrados (HTTPS/TLS). Puedes solicitar la eliminación de tu cuenta y tus datos en cualquier momento.",
            ]} />
          </Section>

          <Section id="datos" title="3. Datos que recopilamos">
            <Table
              head={["Categoría", "Datos", "Origen", "¿Obligatorio?"]}
              rows={[
                ["Datos de cuenta", "Nombre y apellido, correo electrónico institucional, nombre de usuario, organización, rol y permisos, contraseña (almacenada solo en forma cifrada mediante hash).", "La Organización cliente al crear la cuenta, y tú al iniciar sesión.", "Sí, para usar la aplicación."],
                ["Datos del inventario", "Código patrimonial, descripción, marca, modelo, número de serie, estado y características del bien; local, ambiente y centro de costo; nombre, cargo y área de la persona responsable del bien asignada por la Organización cliente; observaciones.", "Tú o la Organización cliente, al registrar o importar información.", "Sí, es la finalidad del servicio."],
                ["Fotografías y códigos", "Fotografías de los bienes y del contenido de códigos QR o de barras escaneados.", "La cámara de tu dispositivo, solo cuando tú la activas.", "No. Puedes registrar bienes sin fotografía."],
                ["Ubicación", "Ubicación precisa (GPS) y aproximada del dispositivo en el momento de registrar o validar un bien.", "El dispositivo, solo con tu permiso y mientras usas la función.", "No. Puedes denegar el permiso."],
                ["Actividad en el servicio", "Registros creados o modificados, fecha y hora, usuario que realizó el cambio y estado de sincronización (registro de auditoría).", "Generados automáticamente al usar SGIP.", "Sí, por trazabilidad."],
                ["Datos técnicos y de diagnóstico", "Modelo y fabricante del dispositivo, versión de Android, versión de la aplicación, identificador de instalación generado por la aplicación, dirección IP, registros de errores y de rendimiento.", "Generados automáticamente.", "Sí, para seguridad y soporte."],
                ["Solicitudes del sitio web", "Nombre, organización, correo, teléfono (opcional), volumen aproximado de bienes, mensaje (opcional), dirección IP, navegador y fecha del envío.", "Tú, al enviar el formulario “Solicitar una demo”, “Solicitar cotización” o “Hablar con un especialista”.", "Sí, para responderte."],
              ]}
            />
            <p><strong>Datos que no recopilamos:</strong> SGIP no accede a tus contactos, mensajes SMS, registro de llamadas, micrófono, calendario, datos de salud, datos financieros ni a la lista de aplicaciones instaladas. Tampoco recopila el identificador de publicidad de Android.</p>
            <p>Si al fotografiar un bien aparecen personas o información ajena, te pedimos encuadrar solo el bien. Las fotografías se usan exclusivamente como evidencia del inventario.</p>
          </Section>

          <Section id="permisos" title="4. Permisos de la aplicación">
            <p>La aplicación solicita los siguientes permisos de Android. Los permisos de cámara y ubicación se piden en el momento en que los necesitas y puedes revocarlos en cualquier momento desde la configuración de tu dispositivo; la aplicación seguirá funcionando sin ellos, salvo la función específica que los requiere.</p>
            <Table
              head={["Permiso", "Para qué lo usamos"]}
              rows={[
                ["Cámara", "Escanear códigos QR y de barras, y tomar fotografías de los bienes para su identificación (incluido el análisis por OCR e inteligencia artificial)."],
                ["Ubicación precisa y aproximada", "Registrar dónde se inventarió un bien y validar que está en el local o ambiente asignado. Solo mientras la aplicación está en uso; nunca en segundo plano."],
                ["Fotos y archivos seleccionados", "Adjuntar una imagen existente cuando tú la eliges en el selector del sistema. Solo accedemos a la imagen que seleccionas."],
                ["Internet y estado de la red", "Sincronizar la información con la plataforma y detectar si hay conexión para trabajar en modo sin conexión."],
              ]}
            />
          </Section>

          <Section id="uso" title="5. Cómo usamos los datos">
            <List items={[
              <><strong>Prestar el servicio:</strong> autenticarte, registrar y consultar bienes, trabajar sin conexión y sincronizar la información con la plataforma de tu organización.</>,
              <><strong>Identificación asistida por OCR e inteligencia artificial:</strong> analizar las fotografías para extraer marca, modelo, número de serie y características, y sugerir posibles coincidencias entre el inventario físico y el Margesí. La IA solo genera sugerencias: ningún dato se modifica sin la validación de un usuario, y no se toman decisiones automatizadas que produzcan efectos jurídicos sobre personas.</>,
              <><strong>Trazabilidad y auditoría:</strong> registrar quién creó o modificó cada registro y cuándo, para que la Organización cliente pueda rendir cuentas de su inventario.</>,
              <><strong>Seguridad:</strong> prevenir accesos no autorizados, fraude y abuso, y proteger la integridad de la información.</>,
              <><strong>Soporte y mejora:</strong> diagnosticar errores, medir el rendimiento y mejorar la estabilidad de la aplicación.</>,
              <><strong>Comunicaciones del servicio:</strong> enviarte avisos relacionados con tu cuenta, cambios en el servicio o en esta política.</>,
              <><strong>Atender solicitudes comerciales:</strong> responder a quienes piden una demostración, cotización o contacto desde el sitio web.</>,
              <><strong>Cumplir obligaciones legales</strong> y atender requerimientos de autoridades competentes.</>,
            ]} />
            <p>Tratamos los datos sobre la base de la ejecución del contrato con la Organización cliente, tu consentimiento (por ejemplo, al conceder los permisos de cámara y ubicación o al enviar el formulario del sitio), nuestro interés legítimo en mantener el servicio seguro y el cumplimiento de obligaciones legales.</p>
            <p>No usamos los datos para publicidad, no elaboramos perfiles comerciales y no vendemos ni alquilamos datos personales.</p>
          </Section>

          <Section id="compartir" title="6. Con quién compartimos los datos">
            <p>Solo compartimos datos personales con los siguientes tipos de terceros y únicamente en la medida necesaria:</p>
            <Table
              head={["Tipo de tercero", "Datos", "Finalidad"]}
              rows={[
                ["La Organización cliente y sus usuarios autorizados", "Datos de cuenta, del inventario, fotografías, ubicación de registro y registro de auditoría.", "Gestionar su inventario patrimonial. Cada usuario ve la información según el rol y los permisos que le asigna su organización."],
                ["Proveedores de infraestructura y alojamiento en la nube (por ejemplo, Google Cloud)", "Todos los datos almacenados en la plataforma y copias de seguridad.", "Alojar servidores, bases de datos y respaldos."],
                ["Proveedores de inteligencia artificial y reconocimiento óptico de caracteres (OCR)", "Fotografías de los bienes y el texto extraído de ellas.", "Identificar marca, modelo, serie y características de los bienes."],
                ["Proveedores de comunicaciones y correo electrónico", "Nombre y correo electrónico.", "Enviar notificaciones del servicio y responder solicitudes."],
                ["Proveedores de diagnóstico y monitoreo de errores", "Datos técnicos y de diagnóstico.", "Detectar y corregir fallas de la aplicación."],
                ["Autoridades públicas", "Los datos que la ley o una orden válida exijan.", "Cumplir obligaciones legales o requerimientos de autoridades competentes."],
                ["Sucesores en una operación societaria", "Los datos necesarios para continuar el servicio.", "En caso de fusión, adquisición o reorganización, con las mismas garantías de esta política."],
              ]}
            />
            <p>Los proveedores actúan por cuenta de {COMPANY}, bajo obligaciones contractuales de confidencialidad y seguridad, y solo pueden usar los datos para prestarnos sus servicios. La descarga e instalación de la aplicación se realiza a través de Google Play, que trata datos conforme a su propia política de privacidad.</p>
          </Section>

          <Section id="transferencias" title="7. Transferencias internacionales">
            <p>Algunos de nuestros proveedores, incluidos los de alojamiento en la nube, pueden almacenar o procesar datos en servidores ubicados fuera del Perú (por ejemplo, en Estados Unidos). En esos casos realizamos el flujo transfronterizo conforme a la Ley N.° 29733 y su reglamento, con proveedores que ofrecen niveles adecuados de protección y garantías contractuales de seguridad y confidencialidad.</p>
          </Section>

          <Section id="seguridad" title="8. Seguridad">
            <List items={[
              "Cifrado de los datos en tránsito mediante HTTPS/TLS entre la aplicación, la plataforma y nuestros servidores, y cifrado en reposo en la infraestructura en la nube.",
              "Control de acceso por roles y permisos definidos por la Organización cliente.",
              "Contraseñas almacenadas solo en forma cifrada mediante hash.",
              "Registro de auditoría de cambios, copias de seguridad periódicas y monitoreo de la infraestructura.",
              "Acceso a los datos restringido al personal de egora que lo necesita para prestar soporte, sujeto a obligaciones de confidencialidad.",
            ]} />
            <p>Para el trabajo sin conexión, la aplicación guarda temporalmente en tu dispositivo los registros y fotografías pendientes de sincronizar, y los elimina del almacenamiento local de la aplicación después de sincronizarlos o al cerrar sesión. Te recomendamos proteger tu dispositivo con bloqueo de pantalla. Ningún sistema es completamente infalible; si detectamos un incidente de seguridad que afecte tus datos, lo comunicaremos a la Organización cliente, a ti y a la autoridad cuando corresponda.</p>
          </Section>

          <Section id="conservacion" title="9. Conservación">
            <List items={[
              "Datos de cuenta: mientras la cuenta esté activa. Si la cuenta se elimina, los borramos en los plazos indicados en la sección siguiente.",
              <>Datos del inventario, fotografías y ubicación de registro: mientras esté vigente el contrato con la Organización cliente. Al terminar, se devuelven o eliminan según sus instrucciones, como máximo {CONTRACT_END_DAYS} días después.</>,
              "Registro de auditoría: durante el mismo plazo que los datos del inventario, porque forma parte de la evidencia que la Organización cliente debe conservar.",
              "Datos técnicos y de diagnóstico: hasta 90 días.",
              <>Solicitudes del sitio web: hasta {LEADS_RETENTION_MONTHS} meses desde el último contacto, salvo que se convierta en una relación contractual.</>,
              "Copias de seguridad: se sobrescriben de forma periódica; los datos eliminados desaparecen de ellas al completarse el ciclo de rotación.",
            ]} />
            <p>Podemos conservar datos por más tiempo solo cuando una obligación legal lo exija.</p>
          </Section>

          <Section id="eliminar-cuenta" title="10. Eliminación de cuenta y datos">
            <p>Puedes solicitar la eliminación de tu cuenta de SGIP y de los datos personales asociados de cualquiera de estas formas:</p>
            <List items={[
              <>Escribiendo a <Mail /> desde el correo asociado a tu cuenta, con el asunto <strong>“Eliminar cuenta SGIP”</strong>, e indicando tu nombre y tu organización.</>,
              "Pidiéndolo al administrador de SGIP de tu organización, que puede desactivar y eliminar tu cuenta.",
            ]} />
            <p>Verificaremos tu identidad y eliminaremos la cuenta y los datos personales asociados en un plazo máximo de {DELETION_DAYS} días. También puedes pedir que eliminemos solo algunos datos (por ejemplo, tus fotografías) sin eliminar la cuenta.</p>
            <p>Ten en cuenta que los registros de inventario que creaste pertenecen a la Organización cliente: al eliminar tu cuenta, tu nombre se desvincula o anonimiza en esos registros, y la Organización cliente puede conservar los datos del bien y el registro de auditoría cuando esté obligada a hacerlo por ley o por sus normas de control patrimonial.</p>
          </Section>

          <Section id="derechos" title="11. Tus derechos">
            <p>Conforme a la Ley N.° 29733, puedes ejercer en cualquier momento tus derechos de <strong>acceso, rectificación, cancelación y oposición</strong> (derechos ARCO), así como revocar el consentimiento que hayas otorgado, escribiendo a <Mail />. Responderemos dentro de los plazos establecidos por la normativa.</p>
            <p>Si los datos fueron registrados por tu Organización cliente, también puedes dirigirte a ella; te ayudaremos a canalizar la solicitud. Si consideras que no atendimos tu solicitud adecuadamente, puedes presentar una reclamación ante la Autoridad Nacional de Protección de Datos Personales del Ministerio de Justicia y Derechos Humanos del Perú.</p>
          </Section>

          <Section id="menores" title="12. Menores de edad">
            <p>SGIP es un servicio de uso profesional e institucional, no está dirigido a menores de 18 años y no recopilamos intencionalmente datos de menores. Si crees que un menor nos proporcionó datos, escríbenos y los eliminaremos.</p>
          </Section>

          <Section id="sitio-web" title="13. Sitio web y cookies">
            <p>El sitio sgip.egora.pe no utiliza cookies publicitarias ni de seguimiento. Para mostrar la tipografía, el sitio carga fuentes desde Google Fonts, por lo que tu navegador se conecta a servidores de Google, que reciben tu dirección IP. Los datos del formulario de contacto se tratan como se describe en las secciones anteriores.</p>
          </Section>

          <Section id="cambios" title="14. Cambios a esta política">
            <p>Podemos actualizar esta política cuando cambien la aplicación, nuestros proveedores o la normativa. Publicaremos la nueva versión en esta página con su fecha de actualización y, si los cambios son relevantes, te avisaremos en la aplicación o por correo electrónico antes de que entren en vigor.</p>
          </Section>

          <Section id="contacto" title="15. Contacto">
            <p>Para cualquier consulta sobre esta política o sobre el tratamiento de tus datos personales:</p>
            <List items={[
              <><strong>{COMPANY_LEGAL_NAME}</strong> — responsable de SGIP</>,
              <>Correo: <Mail /></>,
              <>Sitio web: <a href={SITE_URL} className="font-semibold text-primary underline">{SITE_URL.replace("https://", "")}</a></>,
            ]} />
          </Section>
        </article>
      </main>

      <footer className="bg-navy py-6 text-[10px] text-primary-foreground/60">
        <div className="sg-container flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} egora. SGIP es un producto de egora.</span>
          <Link to="/" className="hover:text-primary-foreground">sgip.egora.pe</Link>
        </div>
      </footer>
    </>
  );
}

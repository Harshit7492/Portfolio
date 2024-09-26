import ClientAboutView from "@/components/client-view/about";
import ClientContactView from "@/components/client-view/contact";
import ClientExperienceAndEducationView from "@/components/client-view/experience";
import ClientHomeView from "@/components/client-view/home";
import ClientProjectView from "@/components/client-view/project";

require('dotenv').config();


const HOST = process.env.HOST_URI
async function extractAllDatas(currentSection) {
  const res = await fetch(`${HOST}/api/${currentSection}/get`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  return data && data.data;
}

export default async function Home() {
  const homeSectionData = await extractAllDatas("home");
  const aboutSectionData = await extractAllDatas("about");
  console.log(aboutSectionData, "aboutSectionData")
  const experienceSectionData = await extractAllDatas("experience");
  const educationSectionData = await extractAllDatas("education");
  const projectSectionData = await extractAllDatas("project");

  return (
    <div>
      <ClientHomeView data={homeSectionData} />
      <ClientAboutView data={aboutSectionData} />
      <ClientExperienceAndEducationView
        educationData={educationSectionData}
        experienceData={experienceSectionData}
      />
      <ClientProjectView data={projectSectionData} />
      <ClientContactView />
      <footer className="footer footer-center bg-green-200 text-base-content p-4">
        <aside>
          <p className="font-bold text-center">Copyright © {new Date().getFullYear()} - Harshit Singh. All rights reserved</p>
        </aside>
      </footer>
    </div>
  );
}
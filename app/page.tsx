import TechnologiesTab from "@/components/TechnologiesTab";
import TechnologyIcon from "@/components/TechnologyIcon";
import Header from "@/components/Header";

import NginxIcon from "devicon/icons/nginx/nginx-original.svg";
import LinuxIcon from "devicon/icons/linux/linux-plain.svg";
import DockerIcon from "devicon/icons/docker/docker-plain.svg";
import KubernetesIcon from "devicon/icons/kubernetes/kubernetes-plain.svg";
import AwsIcon from "devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg";
import GoogleCloudIcon from "devicon/icons/googlecloud/googlecloud-plain.svg";
import AnsibleIcon from "devicon/icons/ansible/ansible-plain.svg";
import TerraformIcon from "devicon/icons/terraform/terraform-plain.svg";
import PythonIcon from "devicon/icons/python/python-plain.svg";
import DjangoIcon from "devicon/icons/django/django-plain.svg";
import NodejsIcon from "devicon/icons/nodejs/nodejs-plain.svg";
import ReactIcon from "devicon/icons/react/react-original.svg";
import NextjsIcon from "devicon/icons/nextjs/nextjs-original-wordmark.svg";

const technologies = [
  {
    label: "Servers",
    width: "100%",
    technologies: [
      {
        icon: <NginxIcon />,
        label: "Nginx",
      },
      {
        icon: <LinuxIcon />,
        label: "Linux",
        color: "#ddd",
      },
      {
        icon: <DockerIcon />,
        label: "Docker",
      },
      {
        icon: <KubernetesIcon />,
        label: "Kubernetes",
      },
      {
        icon: <AwsIcon />,
        label: "AWS",
      },
      {
        icon: <GoogleCloudIcon />,
        label: "Google Cloud",
      },
      {
        icon: <AnsibleIcon />,
        label: "Ansible",
      },
      {
        icon: <TerraformIcon />,
        label: "Terraform",
        color: "#ddd",
      },
    ],
  },
  {
    label: "Backend",
    width: "50%",
    technologies: [
      {
        icon: <PythonIcon />,
        label: "Python",
      },
      {
        icon: <DjangoIcon />,
        label: "Django",
      },
      {
        icon: <NodejsIcon />,
        label: "Node JS",
      },
    ],
  },
  {
    label: "Frontend",
    width: "50%",
    technologies: [
      {
        icon: <ReactIcon />,
        label: "React",
      },
      {
        icon: <NextjsIcon />,
        label: "Next.js",
        color: "#ddd",
      },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <Header />

      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {technologies.map((tab) => (
          <div key={tab.label} style={{ width: tab.width, padding: "10px" }}>
            <TechnologiesTab label={tab.label} color="#0f0">
              {tab.technologies.map((technology) => (
                <TechnologyIcon
                  key={technology.label}
                  icon={technology.icon}
                  color={technology.color}
                >
                  {technology.label}
                </TechnologyIcon>
              ))}
            </TechnologiesTab>
          </div>
        ))}
      </div>
    </main>
  );
}

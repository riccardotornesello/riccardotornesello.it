import NginxIcon from "@/assets/icons/nginx-original.svg";
import LinuxIcon from "@/assets/icons/linux-plain.svg";
import DockerIcon from "@/assets/icons/docker-plain.svg";
import KubernetesIcon from "@/assets/icons/kubernetes-plain.svg";
import AwsIcon from "@/assets/icons/amazonwebservices-plain-wordmark.svg";
import GoogleCloudIcon from "@/assets/icons/googlecloud-plain-wordmark.svg";
import AnsibleIcon from "@/assets/icons/ansible-plain-wordmark.svg";
import TerraformIcon from "@/assets/icons/terraform-plain-wordmark.svg";
import PythonIcon from "@/assets/icons/python-plain-wordmark.svg";
import DjangoIcon from "@/assets/icons/django-plain-wordmark.svg";
import NodejsIcon from "@/assets/icons/nodejs-plain-wordmark.svg";
import ReactIcon from "@/assets/icons/react-original.svg";
import NextjsIcon from "@/assets/icons/nextjs-plain.svg";
import { FC, SVGProps } from "react";

export type Technology = {
  icon: FC<SVGProps<SVGElement>>;
  label: string;
  color?: string;
};

export type TechnologyGroup = {
  label: string;
  width: {
    sm: number;
    lg: number;
  };
  rowSize: number;
  color: string;
  technologies: Technology[];
};

export const technologyGroups: TechnologyGroup[] = [
  {
    label: "Servers",
    width: {
      sm: 12,
      lg: 12,
    },
    rowSize: 4,
    color: "#0f0",
    technologies: [
      {
        icon: NginxIcon,
        label: "Nginx",
      },
      {
        icon: LinuxIcon,
        label: "Linux",
        color: "#ddd",
      },
      {
        icon: DockerIcon,
        label: "Docker",
      },
      {
        icon: KubernetesIcon,
        label: "Kubernetes",
      },
      {
        icon: AwsIcon,
        label: "AWS",
      },
      {
        icon: GoogleCloudIcon,
        label: "Google Cloud",
      },
      {
        icon: AnsibleIcon,
        label: "Ansible",
      },
      {
        icon: TerraformIcon,
        label: "Terraform",
        color: "#657FF4",
      },
    ],
  },
  {
    label: "Backend",
    width: {
      sm: 12,
      lg: 6,
    },
    rowSize: 3,
    color: "#0f0",
    technologies: [
      {
        icon: PythonIcon,
        label: "Python",
      },
      {
        icon: DjangoIcon,
        label: "Django",
      },
      {
        icon: NodejsIcon,
        label: "Node JS",
      },
    ],
  },
  {
    label: "Frontend",
    width: {
      sm: 12,
      lg: 6,
    },
    rowSize: 3,
    color: "#0f0",
    technologies: [
      {
        icon: ReactIcon,
        label: "React",
      },
      {
        icon: NextjsIcon,
        label: "Next.js",
        color: "#ddd",
      },
    ],
  },
];

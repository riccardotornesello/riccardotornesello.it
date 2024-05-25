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

export type Technology = {
  icon: JSX.Element;
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
    width: {
      sm: 12,
      lg: 6,
    },
    rowSize: 3,
    color: "#0f0",
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

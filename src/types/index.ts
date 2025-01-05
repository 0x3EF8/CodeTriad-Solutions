export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image: string;
  type: 'Frontend' | 'Backend' | 'Full Stack';
}

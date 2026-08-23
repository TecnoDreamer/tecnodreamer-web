export interface TeamMember {
  name: string;
  role: string;
  description: string;
  specialties: string[];
  photoUrl: string | null;
  linkedinUrl: string | null;
  githubUrl: string | null;
  isPlaceholder: boolean;
}

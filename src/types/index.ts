// Type definitions
export interface User {
  uid: string;
  email: string;
  role: 'admin' | 'tutor' | 'student';
  createdAt: Date;
}

export interface Tutor {
  id: string;
  name: string;
  bio: string;
  credentials: string[];
  experience: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  subjects: string[]; // subject ids
  profileImage?: string;
}

export interface Subject {
  id: string;
  name: string;
  level: 'school' | 'university';
  category: string;
  description: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  message: string;
  subject?: string;
  createdAt: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  review: string;
  rating: number;
  createdAt: Date;
}
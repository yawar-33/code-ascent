
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Define params type correctly as a specific Promise or object depending on Next.js version, 
// but for standard usage in latest Next.js 15+ or 14, params is a Promise of params.
// We will use standard async function signature.

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: 'Project Not Found' };
  
  return {
    title: `${project.title} | Code Ascent Project`,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Note: We removed client-side motion animations for the main page wrapper 
  // to support server-side rendering for better SEO. 
  // If entry animation is critical, we can wrap content in a client component.

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
        <div className="container">
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                <ArrowLeft size={20} style={{ marginRight: '0.5rem' }} /> Back to Home
            </Link>

            <div style={{ marginBottom: '3rem' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-text-light)', marginBottom: '1rem' }}>
                    {project.title}
                </h1>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                    {project.tags.map((tag) => (
                        <span key={tag} style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)' }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {project.image && (
                <div style={{ marginBottom: '4rem', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 20px 50px -20px rgba(2, 12, 27, 0.7)' }}>
                    <img src={project.image} alt={project.title} style={{ width: '100%', display: 'block' }} />
                </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                <div>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-light)', marginBottom: '1rem' }}>Overview</h3>
                    <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>{project.fullDescription}</p>

                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href={project.link} style={{ display: 'flex', alignItems: 'center', color: 'var(--color-accent)', fontWeight: 'bold' }}>
                            Live Demo <ExternalLink size={18} style={{ marginLeft: '5px' }} />
                        </a>
                        <a href="#" style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text-light)' }}>
                            View Code <Github size={18} style={{ marginLeft: '5px' }} />
                        </a>
                    </div>
                </div>

                <div>
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>The Challenge</h3>
                        <p>{project.challenge}</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>The Solution</h3>
                        <p>{project.solution}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

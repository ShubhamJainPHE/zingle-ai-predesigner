import React from 'react';
import { Linkedin, Twitter, Github, MapPin, Building2, GraduationCap } from 'lucide-react';

export const TeamSection: React.FC = () => {
  // Note: These are placeholder team members following PRD guidelines
  // Replace with actual team information and professional headshots
  const teamMembers = [
    {
      id: 1,
      name: '[Founder/CEO Name Required]',
      title: 'Founder & CEO',
      bio: '[Replace with actual background - previous experience, education, achievements]',
      image: '/api/placeholder/team-member-1', // Replace with professional headshot
      location: '[City, Country]',
      education: '[University/Degree Required]',
      previousRole: '[Previous Company/Role Required]',
      expertise: ['[Skill 1]', '[Skill 2]', '[Skill 3]'],
      social: {
        linkedin: '[LinkedIn URL Required]',
        twitter: '[Twitter URL if available]',
        github: '[GitHub URL if applicable]'
      },
      yearsExperience: '[X] years'
    },
    {
      id: 2,
      name: '[Co-founder/CTO Name Required]',
      title: 'Co-founder & CTO',
      bio: '[Replace with actual background - technical expertise, previous companies, achievements]',
      image: '/api/placeholder/team-member-2', // Replace with professional headshot
      location: '[City, Country]',
      education: '[University/Degree Required]',
      previousRole: '[Previous Company/Role Required]',
      expertise: ['[Technical Skill 1]', '[Technical Skill 2]', '[Technical Skill 3]'],
      social: {
        linkedin: '[LinkedIn URL Required]',
        twitter: '[Twitter URL if available]',
        github: '[GitHub URL if applicable]'
      },
      yearsExperience: '[X] years'
    },
    {
      id: 3,
      name: '[Key Team Member Name Required]',
      title: '[Actual Title Required]',
      bio: '[Replace with actual background and role at company]',
      image: '/api/placeholder/team-member-3', // Replace with professional headshot
      location: '[City, Country]',
      education: '[University/Degree Required]',
      previousRole: '[Previous Company/Role Required]',
      expertise: ['[Relevant Skill 1]', '[Relevant Skill 2]', '[Relevant Skill 3]'],
      social: {
        linkedin: '[LinkedIn URL Required]',
        twitter: '[Twitter URL if available]',
        github: '[GitHub URL if applicable]'
      },
      yearsExperience: '[X] years'
    }
  ];

  const companyStats = [
    { label: 'Data Teams Served', value: '100+' },
    { label: 'Founded', value: '[YEAR REQUIRED]' },
    { label: 'Headquarters', value: '[LOCATION REQUIRED]' },
    { label: 'Backed By', value: 'Nexus & Accel' }
  ];

  const investors = [
    'Nexus Venture Partners',
    'Accel',
    '[Additional investors if public]'
  ];

  return (
    <section className="section-padding bg-secondary-50" id="team">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            <Building2 className="w-4 h-4 mr-2" />
            Our Team
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
            Meet the Team Fixing Enterprise AI
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-secondary-600">
            Our team combines deep expertise in AI/ML, enterprise data infrastructure, and developer tools 
            to solve the AI context problem that costs companies millions.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {companyStats.map((stat, statIndex) => (
            <div key={statIndex} className="text-center p-6 bg-white rounded-xl shadow-sm border border-secondary-200">
              <div className="text-2xl font-bold text-primary-600 mb-1">{stat.value}</div>
              <div className="text-sm text-secondary-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl p-8 shadow-sm border border-secondary-200 hover:shadow-lg transition-shadow duration-300 relative">
              {/* Content Notice */}
              <div className="absolute top-2 right-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                ⚠️ PLACEHOLDER
              </div>
              
              {/* Profile Image Placeholder */}
              <div className="mb-6">
                <div className="w-24 h-24 bg-secondary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="w-12 h-12 text-secondary-500" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{member.title}</p>
                  <div className="flex items-center justify-center text-sm text-secondary-500 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {member.location}
                  </div>
                  <div className="text-sm text-secondary-600">{member.yearsExperience} experience</div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-secondary-700 text-sm leading-relaxed mb-4">
                {member.bio}
              </p>

              {/* Background Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <Building2 className="w-4 h-4 text-secondary-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="text-secondary-600">Previous:</div>
                    <div className="text-secondary-800 font-medium">{member.previousRole}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <GraduationCap className="w-4 h-4 text-secondary-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="text-secondary-600">Education:</div>
                    <div className="text-secondary-800 font-medium">{member.education}</div>
                  </div>
                </div>
              </div>

              {/* Expertise Tags */}
              <div className="mb-6">
                <div className="text-sm text-secondary-600 mb-2">Expertise:</div>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {member.social.linkedin && (
                  <a href="#" className="text-secondary-400 hover:text-primary-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.social.twitter && (
                  <a href="#" className="text-secondary-400 hover:text-primary-600 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {member.social.github && (
                  <a href="#" className="text-secondary-400 hover:text-primary-600 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Content Requirements Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-16">
          <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Content Requirements for Production</h3>
          <div className="text-sm text-yellow-700 space-y-2">
            <p><strong>Required for each team member:</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Real name, title, and role at company</li>
              <li>Professional headshot photo (high-resolution, 500x500px minimum)</li>
              <li>Actual background, education, and previous experience</li>
              <li>Real LinkedIn profile URLs (for verification)</li>
              <li>Accurate location and years of experience</li>
              <li>Specific expertise areas and skills</li>
            </ul>
            <p><strong>Company information:</strong> Verify all stats and investor information is accurate and public</p>
          </div>
        </div>

        {/* Investors Section (if applicable) */}
        <div className="bg-white rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-secondary-900 mb-6">
            Backed by Leading Investors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60">
            {investors.map((investor, index) => (
              <div key={index} className="bg-secondary-100 h-16 rounded flex items-center justify-center">
                <span className="text-sm text-secondary-600 text-center px-4">{investor}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-secondary-400 mt-4">
            ⚠️ PLACEHOLDER: Only include if investor information is public
          </p>
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join Our Mission
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for exceptional talent to help us revolutionize 
              customer communication. Explore opportunities to be part of our journey.
            </p>
            <button className="bg-white text-primary-700 font-semibold py-3 px-8 rounded-lg hover:bg-primary-50 transition-colors duration-200 shadow-lg">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
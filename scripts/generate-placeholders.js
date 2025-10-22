const fs = require('fs');
const path = require('path');

const projects = [
  'primm',
  'kage-booking',
  'jajanan-anira',
  'sekolah-cekr',
  'python-elearning',
  'todolist',
  'polaris',
];

const projectsDir = path.join(__dirname, '../public/images/projects');

// Create directory if not exists
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// Generate placeholder SVG for each project
projects.forEach((project) => {
  const svg = `
    <svg width="800" height="450" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="450" fill="#00d4ff"/>
      <text x="50%" y="50%" 
            font-family="Arial, sans-serif" 
            font-size="32" 
            fill="#ffffff" 
            text-anchor="middle" 
            dominant-baseline="middle">
        ${project.replace(/-/g, ' ').toUpperCase()}
      </text>
    </svg>
  `;
  
  const filePath = path.join(projectsDir, `${project}.svg`);
  fs.writeFileSync(filePath, svg.trim());
  console.log(`✅ Generated: ${project}.svg`);
});

console.log('🎉 All placeholders generated!');
import React from 'react';
import { Download } from 'lucide-react';

interface TemplateCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  downloadUrl: string;
  category: string;
  format: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  title,
  description,
  icon,
  downloadUrl,
  category,
  format
}) => {
  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(downloadUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${title.toLowerCase().replace(/\s+/g, '-')}.${format.toLowerCase()}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download the template. Please try again.');
    }
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden hover-glow transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-yellow-500/10 rounded-lg flex items-center justify-center text-yellow-400">
                {icon}
              </div>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-yellow-400">{category}</div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
            </div>
          </div>
        </div>
        <p className="mt-3 text-gray-400">{description}</p>
        <div className="mt-6 flex items-center justify-between">
          <a
            href={downloadUrl}
            onClick={handleDownload}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 hover-glow"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Template
          </a>
          <span className="text-sm text-gray-500">{format}</span>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
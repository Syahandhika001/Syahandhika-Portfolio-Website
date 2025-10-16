import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Test Section with Theme Toggle */}
      <div className="section container-custom">
        {/* Theme Toggle Button */}
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>

        <h1 className="gradient-text mb-4">Hello, Portfolio! 👋</h1>
        <h2 className="mb-6">Modern Dark/Light Theme Design</h2>
        <p className="text-gray-400 dark:text-gray-400 mb-8 max-w-2xl">
          Color palette with theme switcher. Toggle between dark and light mode
          seamlessly!
        </p>

        <div className="space-y-8">
          {/* Test Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="btn btn-primary">Primary Button</button>
            <button className="btn btn-secondary">Secondary Button</button>
            <button className="btn btn-outline">Outline Button</button>
          </div>

          {/* Test Card */}
          <div className="card">
            <h3 className="text-primary-500 mb-2">Featured Project</h3>
            <p className="text-gray-400 dark:text-gray-400">
              This card adapts to your theme preference. Try switching between
              dark and light mode!
            </p>
          </div>

          {/* Color Palette Display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 bg-dark-primary dark:bg-dark-primary rounded-lg border border-secondary-700 dark:border-secondary-700">
              <div className="text-white font-bold mb-1">#222831</div>
              <div className="text-gray-400 text-sm">Dark Primary</div>
            </div>
            <div className="p-6 bg-dark-secondary dark:bg-dark-secondary rounded-lg border border-secondary-700 dark:border-secondary-700">
              <div className="text-white font-bold mb-1">#393E46</div>
              <div className="text-gray-400 text-sm">Dark Secondary</div>
            </div>
            <div className="p-6 bg-primary-500 rounded-lg">
              <div className="text-white font-bold mb-1">#00ADB5</div>
              <div className="text-white text-sm">Cyan Accent</div>
            </div>
            <div className="p-6 bg-dark-light dark:bg-dark-light rounded-lg">
              <div className="text-dark-primary font-bold mb-1">#EEEEEE</div>
              <div className="text-gray-600 text-sm">Light Gray</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { Assignment, Tab } from './types';
import Navbar from './components/Navbar';
import BackgroundElements from './components/BackgroundElements';
import HomeView from './components/HomeView';
import AssignmentsView from './components/AssignmentsView';
import AssignmentReader from './components/AssignmentReader';
import ThankYouView from './components/ThankYouView';
import { ASSIGNMENTS } from './data';

const getInitialTab = (): Tab => {
  const hash = window.location.hash.replace('#', '');
  if (hash === 'assignments' || hash.startsWith('assignment-')) return 'assignments';
  if (hash === 'conclusion') return 'conclusion';
  return 'home';
};

const getInitialAssignment = () => {
  const match = window.location.hash.match(/^#assignment-(\d+)$/);
  return match ? ASSIGNMENTS.find((item) => item.id === Number(match[1])) ?? null : null;
};

export default function App() {
  const [currentTab, setCurrentTab] = useState<Tab>(getInitialTab);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(getInitialAssignment);

  const setTab = (tab: Tab) => {
    setSelectedAssignment(null);
    setCurrentTab(tab);
    window.history.replaceState(null, '', tab === 'home' ? '#home' : `#${tab}`);
  };

  const openAssignment = (assignment: Assignment) => {
    setCurrentTab('assignments');
    setSelectedAssignment(assignment);
    window.history.replaceState(null, '', `#assignment-${assignment.id}`);
  };

  const closeAssignment = () => {
    setSelectedAssignment(null);
    setCurrentTab('assignments');
    window.history.replaceState(null, '', '#assignments');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab, selectedAssignment]);

  return (
    <div className="min-h-screen bg-background text-on-background bg-pattern relative overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container flex flex-col font-sans">
      <BackgroundElements />
      <Navbar currentTab={selectedAssignment ? 'assignments' : currentTab} setTab={setTab} />

      <main className="flex-grow max-w-[1200px] w-full mx-auto px-4 md:px-6 py-9 md:py-12 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedAssignment ? `assignment-${selectedAssignment.id}` : currentTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {selectedAssignment ? (
              <AssignmentReader assignment={selectedAssignment} onBack={closeAssignment} />
            ) : currentTab === 'home' ? (
              <HomeView setTab={setTab} />
            ) : currentTab === 'assignments' ? (
              <AssignmentsView onOpen={openAssignment} />
            ) : (
              <ThankYouView onHome={() => setTab('home')} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-surface-variant bg-white/65 backdrop-blur-sm py-6 text-center relative z-10">
        <p className="text-xs md:text-sm text-secondary font-semibold">
          Portfolio học tập của Nguyễn Đặng Quỳnh Anh · ULIS · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

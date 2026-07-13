import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Download, FileText, LoaderCircle, Sparkles } from 'lucide-react';
import type { Assignment } from '../types';

interface AssignmentReaderProps {
  assignment: Assignment;
  onBack: () => void;
}

export default function AssignmentReader({ assignment, onBack }: AssignmentReaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let cancelled = false;
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = '';
    setStatus('loading');

    async function renderDocument() {
      try {
        const [{ renderAsync }, response] = await Promise.all([
          import('docx-preview'),
          fetch(assignment.file),
        ]);
        if (!response.ok) throw new Error('Không thể tải tài liệu');
        const buffer = await response.arrayBuffer();
        if (cancelled || !container) return;
        await renderAsync(buffer, container, undefined, {
          className: 'docx-page',
          inWrapper: true,
          ignoreWidth: false,
          ignoreHeight: false,
          ignoreFonts: false,
          breakPages: true,
          renderHeaders: true,
          renderFooters: true,
          useBase64URL: true,
        });
        if (!cancelled) setStatus('ready');
      } catch (error) {
        console.error(error);
        if (!cancelled) setStatus('error');
      }
    }

    renderDocument();
    return () => {
      cancelled = true;
      if (container) container.innerHTML = '';
    };
  }, [assignment]);

  return (
    <article className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button onClick={onBack} className="btn-secondary !py-2.5 !px-5"><ArrowLeft size={17} /> Quay lại danh mục</button>
        <a href={assignment.file} download={`Bai-${assignment.id}-Nguyen-Dang-Quynh-Anh.docx`} className="btn-primary !py-2.5 !px-5"><Download size={17} /> Tải file gốc</a>
      </div>

      <header className="rounded-[32px] bg-white/80 border border-surface-variant p-7 md:p-10 shadow-kawaii-card relative overflow-hidden">
        <div className="absolute right-0 top-0 w-52 h-52 rounded-bl-full opacity-30" style={{ background: assignment.accent }} />
        <div className="relative max-w-4xl">
          <p className="section-kicker">Bài tập 0{assignment.id} · {assignment.shortTitle}</p>
          <h1 className="font-headline text-3xl md:text-5xl font-bold leading-tight mt-2">{assignment.title}</h1>
          <p className="text-on-surface-variant leading-7 mt-4">{assignment.subtitle}</p>
        </div>
      </header>

      <section className="document-shell">
        <div className="flex items-center justify-between gap-3 px-5 md:px-7 py-4 bg-[#3c2930] text-white rounded-t-[26px]">
          <div className="flex items-center gap-2 font-bold"><FileText size={18} /> Nội dung báo cáo</div>
          <span className="text-xs text-white/60 hidden sm:block">Văn bản, bảng và hình ảnh từ file gốc</span>
        </div>
        <div className="document-stage">
          {status === 'loading' && <div className="document-message"><LoaderCircle className="animate-spin text-primary" /><p>Đang dựng nội dung và hình ảnh của tài liệu...</p></div>}
          {status === 'error' && <div className="document-message"><FileText className="text-primary" /><p>Trình duyệt chưa thể hiển thị file này. Bạn vẫn có thể tải file gốc bằng nút phía trên.</p></div>}
          <div ref={containerRef} className={`docx-render ${status === 'ready' ? 'block' : 'hidden'}`} />
        </div>
      </section>

      <section className="lesson-card">
        <div className="w-14 h-14 rounded-2xl bg-white text-primary flex items-center justify-center shadow-sm shrink-0"><Sparkles size={25} /></div>
        <div><p className="section-kicker">Đúc kết bài học</p><h2 className="font-headline text-2xl font-bold mt-1">Điều mình nhận được sau bài tập</h2><p className="text-on-surface-variant leading-7 mt-3">{assignment.lesson}</p></div>
      </section>

      <div className="text-center"><button onClick={onBack} className="btn-secondary"><ArrowLeft size={17} /> Thu gọn và về danh mục</button></div>
    </article>
  );
}

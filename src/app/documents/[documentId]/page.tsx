import { Editor } from './editor';
import { Toolbar } from './toolbar';

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>; // this wasn't a Promise until next.js 15
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;

  return ( 
    <div className="min-h-screen bg-[#FAFBFD]">
      <Toolbar />
      <Editor />
    </div>
  );
};
 
export default DocumentIdPage;
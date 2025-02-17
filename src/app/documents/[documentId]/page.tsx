import { Editor } from './editor';

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>; // this wasn't a Promise until next.js 15
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;

  return ( 
    <div>
      DocumentIdPage {documentId}
      <Editor />
    </div>
  );
};
 
export default DocumentIdPage;
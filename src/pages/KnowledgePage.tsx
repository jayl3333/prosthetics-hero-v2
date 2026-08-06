import PageHeader from "../components/PageHeader";
import KnowledgeBase from "../components/KnowledgeBase";

export default function KnowledgePage() {
  return (
    <div>
      <PageHeader
        eyebrow="社区知识库"
        title="共享知识，加速每一次研究"
        description="公开数据集、技术论文、教程视频与社区讨论，一处汇集，随时检索。"
      />
      <KnowledgeBase />
    </div>
  );
}

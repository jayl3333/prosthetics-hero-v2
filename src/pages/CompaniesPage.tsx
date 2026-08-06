import PageHeader from "../components/PageHeader";
import CompanyLibrary from "../components/CompanyLibrary";
import { COMPANIES, type BaseCompany } from "../data";

type Props = {
  onOpen: (c: BaseCompany) => void;
};

export default function CompaniesPage({ onOpen }: Props) {
  return (
    <div>
      <PageHeader
        eyebrow="产业公司库"
        title="汇聚全球知名具身智能企业信息"
        description="查看其能力标签。"
      />
      <CompanyLibrary companies={COMPANIES} mode="industry" onOpen={onOpen} />
    </div>
  );
}

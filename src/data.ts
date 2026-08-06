export type BaseCompany = {
  id: string;
  name: string;
  initial: string;
  color: string;
  tags: string[];
  desc: string;
  detail: string;
  members: number;
  email?: string;
  phone?: string;
  website?: string;
};

export type Company = BaseCompany;

export type ResourceType = "data" | "scene" | "device" | "talent";

export type Dataset = {
  name: string;
  desc: string;
  scale: string;
  type: string;
};

export type VenuePhoto = {
  url: string;
  caption: string;
};

export type DeviceSpec = {
  name: string;
  desc: string;
  specs: string;
  image: string;
};

export type TalentProfile = {
  role: string;
  desc: string;
  count: string;
  skills: string[];
};

export type CaseLink = {
  title: string;
  url: string;
};

export type ResourceCompany = BaseCompany & {
  resourceType: ResourceType;
  datasets: Dataset[];
  venuePhotos?: VenuePhoto[];
  deviceSpecs?: DeviceSpec[];
  talentProfiles?: TalentProfile[];
  personInCharge?: string;
  caseLinks?: CaseLink[];
};

export const COMPANIES: Company[] = [
  {
    id: "agibot",
    name: "智元机器人 AgiBot",
    initial: "智",
    color: "#2563EB",
    tags: ["具身大模型", "仿真"],
    desc: "面向通用具身智能的机器人公司与数据平台。",
    detail:
      "智元机器人聚焦通用具身智能体研发，开放大规模真实+仿真操作数据集，覆盖抓取、装配、导航等任务，并提供标注工具链与评测基准，支撑学术与产业快速迭代。",
    members: 42,
  },
  {
    id: "unitree",
    name: "宇树科技 Unitree",
    initial: "宇",
    color: "#16A34A",
    tags: ["四足机器人", "运动控制", "遥操作"],
    desc: "四足/人形机器人本体与运动控制领先企业。",
    detail:
      "宇树科技提供高动态四足与人形机器人平台，沉淀海量运动控制遥操作与步态数据，并向社区开放部分轨迹与真值，用于策略学习与仿真验证。",
    members: 31,
  },
  {
    id: "fourier",
    name: "傅利叶智能 Fourier",
    initial: "傅",
    color: "#9333EA",
    tags: ["康复机器人", "仿真数据", "医疗"],
    desc: "康复与通用人形机器人，专注医疗场景数据。",
    detail:
      "傅利叶智能围绕康复与通用人形机器人构建医疗级动作数据库，包含关节力矩、肌电与步态真值，支持康复评估模型训练与临床科研协作。",
    members: 27,
  },
  {
    id: "starsea",
    name: "星海图 StarSea",
    initial: "星",
    color: "#EA580C",
    tags: ["视觉抓取", "操作数据", "多模态"],
    desc: "以视觉-语言-动作为核心的具身操作公司。",
    detail:
      "星海图专注视觉-语言-动作（VLA）端到端操作，发布多视角抓取与长程任务数据集，配套可复现的训练与评测脚本，降低具身操作研究门槛。",
    members: 35,
  },
  {
    id: "galbot",
    name: "银河通用 Galbot",
    initial: "银",
    color: "#0891B2",
    tags: ["双臂操作", "仿真平台", "基准"],
    desc: "双臂通用机器人及大规模仿真数据平台。",
    detail:
      "银河通用提供双臂操作机器人与高保真仿真平台，生成十亿级合成操作样本，并建立可迁移到真机的训练范式，加速零售、物流等场景落地。",
    members: 38,
  },
  {
    id: "qianxun",
    name: "千寻智能 QianXun",
    initial: "千",
    color: "#DB2777",
    tags: ["抓取基准", "多模态", "开源"],
    desc: "开源抓取基准与多模态具身研究社区。",
    detail:
      "千寻智能维护开放抓取基准与多模态语料，倡导可复现研究，定期举办社区挑战赛，并汇总企业脱敏数据形成共享知识库。",
    members: 29,
  },
];

export const RESOURCE_TYPES: { key: ResourceType; label: string }[] = [
  { key: "data", label: "数据" },
  { key: "scene", label: "场景" },
  { key: "device", label: "设备" },
  { key: "talent", label: "人力" },
];

export const RESOURCE_COMPANIES: ResourceCompany[] = [
  {
    id: "scenelab",
    name: "场景实验室 SceneLab",
    initial: "景",
    color: "#0d9488",
    tags: ["场景数据", "仿真环境", "场地租赁"],
    desc: "提供具身智能真实测试场景与场地数据的平台。",
    detail:
      "场景实验室专注于为具身智能团队提供真实测试场地与多场景数据采集服务，覆盖家居、仓储、零售等环境，支持按需定制场景并配套采集设备。",
    members: 18,
    email: "contact@scenelab.cn",
    phone: "021-5588-2025",
    website: "scenelab.cn",
    resourceType: "scene",
    datasets: [
      {
        name: "SceneLab-Home 操作场景数据集",
        desc: "涵盖家居环境下抓取、放置、开关等操作的多视角场景数据",
        scale: "50万条轨迹",
        type: "场景数据",
      },
      {
        name: "SceneLab-Warehouse 仓储场景数据集",
        desc: "仓储分拣与搬运场景的多模态数据，含深度与点云",
        scale: "20万条轨迹",
        type: "场景数据",
      },
    ],
    venuePhotos: [
      {
        url: "/prosthetics-hero/venues/scenelab-home.jpg",
        caption: "家居操作场景测试区",
      },
      {
        url: "/prosthetics-hero/venues/scenelab-warehouse.jpg",
        caption: "仓储分拣场景测试区",
      },
    ],
    personInCharge: "陈景明",
    caseLinks: [
      { title: "某头部机器人公司家居操作数据采集项目", url: "https://scenelab.cn/cases/home-robot" },
      { title: "仓储分拣场景定制与数据标注合作", url: "https://scenelab.cn/cases/warehouse" },
    ],
  },
  {
    id: "dataforge",
    name: "数源工场 DataForge",
    initial: "数",
    color: "#2563EB",
    tags: ["操作数据", "遥操作", "数据标注"],
    desc: "大规模遥操作数据采集与标注服务平台。",
    detail:
      "数源工场提供专业遥操作数据采集服务，拥有百人标注团队，支持多机器人平台、多任务类型的数据生产，并配套质量审计与清洗工具链。",
    members: 65,
    email: "biz@dataforge.ai",
    phone: "010-8866-1010",
    website: "dataforge.ai",
    resourceType: "data",
    datasets: [
      {
        name: "DataForge-Dex 灵巧操作数据集",
        desc: "多机器人灵巧手抓取与操作数据，含力觉与视觉模态",
        scale: "120万条轨迹",
        type: "操作数据",
      },
      {
        name: "DataForge-Nav 导航数据集",
        desc: "室内外导航与避障数据，含激光雷达与视觉里程计",
        scale: "80万条轨迹",
        type: "导航数据",
      },
    ],
    personInCharge: "李数源",
    caseLinks: [
      { title: "多机器人平台遥操作数据批量采集案例", url: "https://dataforge.ai/cases/teleop" },
      { title: "百万级操作数据标注与质量审计项目", url: "https://dataforge.ai/cases/annotation" },
    ],
  },
  {
    id: "roboteq",
    name: "锐器智联 RobotEQ",
    initial: "锐",
    color: "#EA580C",
    tags: ["机器人本体", "传感器", "硬件平台"],
    desc: "具身智能机器人本体与传感器设备供应商。",
    detail:
      "锐器智联提供多型号机械臂、夹爪与传感器租赁与销售服务，支持按项目灵活配置，并为社区提供标准化硬件接口与驱动支持。",
    members: 42,
    email: "sales@roboteq.cn",
    phone: "0755-8800-3000",
    website: "roboteq.cn",
    resourceType: "device",
    datasets: [
      {
        name: "RobotEQ-Sensor 传感器标定数据集",
        desc: "多型号力矩传感器与视觉传感器的标定与真值数据",
        scale: "5万组标定",
        type: "标定数据",
      },
    ],
    deviceSpecs: [
      {
        name: "RobotEQ-Arm6 六轴机械臂",
        desc: "高精度六轴机械臂，适用于抓取、装配与遥操作任务，支持力位混合控制",
        specs: "负载3kg / 臂展850mm / 重复精度±0.05mm",
        image: "/prosthetics-hero/devices/roboteq-arm6.jpg",
      },
      {
        name: "RobotEQ-Gripper 智能夹爪",
        desc: "电动二指夹爪，集成力觉反馈，支持柔性抓取与力度自适应调节",
        specs: "行程0-80mm / 最大夹持力40N / 通讯CAN/RS485",
        image: "/prosthetics-hero/devices/roboteq-gripper.jpg",
      },
    ],
    personInCharge: "王锐",
    caseLinks: [
      { title: "某高校实验室机械臂与传感器批量租赁项目", url: "https://roboteq.cn/cases/lab-rental" },
      { title: "标准化硬件接口驱动开源合作", url: "https://roboteq.cn/cases/open-driver" },
    ],
  },
  {
    id: "embotalent",
    name: "具身人才 EmbotTalent",
    initial: "人",
    color: "#9333EA",
    tags: ["人才对接", "研究合作", "招聘"],
    desc: "具身智能领域专业人才对接与研究合作平台。",
    detail:
      "EmbotTalent 专注具身智能领域人才对接，汇聚高校实验室与产业团队需求，提供全职招聘、实习对接与课题合作撮合服务。",
    members: 24,
    email: "hire@embotalent.com",
    phone: "021-3377-8080",
    website: "embotalent.com",
    resourceType: "talent",
    datasets: [
      {
        name: "EmbotTalent-Skill 技能图谱数据集",
        desc: "具身智能岗位技能标签与能力图谱，覆盖300+细分方向",
        scale: "5000条岗位",
        type: "人才数据",
      },
    ],
    talentProfiles: [
      {
        role: "具身智能算法工程师",
        desc: "负责操作策略学习、VLA模型训练与仿真到真机迁移",
        count: "120+人",
        skills: ["强化学习", "模仿学习", "PyTorch", "仿真平台"],
      },
      {
        role: "遥操作与数据采集工程师",
        desc: "负责多机器人平台遥操作数据采集管线与标注质量控制",
        count: "80+人",
        skills: ["遥操作", "数据标注", "ROS", "传感器标定"],
      },
      {
        role: "机器人硬件工程师",
        desc: "负责机械臂/夹爪选型、传感器集成与硬件接口驱动开发",
        count: "60+人",
        skills: ["机械设计", "嵌入式", "CAN总线", "传感器"],
      },
    ],
    personInCharge: "张明",
    caseLinks: [
      { title: "具身智能企业高级算法人才猎聘案例", url: "https://embotalent.com/cases/algo-hire" },
      { title: "高校实验室课题合作人才对接项目", url: "https://embotalent.com/cases/lab-collab" },
    ],
  },
  {
    id: "simpark",
    name: "仿真园区 SimPark",
    initial: "园",
    color: "#16A34A",
    tags: ["仿真场地", "数据采集", "测试服务"],
    desc: "大型仿真测试园区与多场景数据采集服务商。",
    detail:
      "SimPark 拥有2000平米综合测试园区，包含家居、办公、零售、户外等仿真场景，提供场地租赁、数据采集与场景定制一站式服务。",
    members: 36,
    email: "service@simpark.cn",
    phone: "0571-9988-5000",
    website: "simpark.cn",
    resourceType: "scene",
    datasets: [
      {
        name: "SimPark-Multi 多场景数据集",
        desc: "覆盖6大类场景的综合操作数据，含RGB-D与点云",
        scale: "100万条轨迹",
        type: "场景数据",
      },
    ],
    venuePhotos: [
      {
        url: "/prosthetics-hero/venues/simpark-indoor.jpg",
        caption: "室内综合操作测试区",
      },
      {
        url: "/prosthetics-hero/venues/simpark-outdoor.jpg",
        caption: "户外导航与运动测试区",
      },
    ],
    personInCharge: "刘园",
    caseLinks: [
      { title: "2000平米综合测试园区建设与运营案例", url: "https://simpark.cn/cases/park-build" },
      { title: "多场景数据采集一站式服务合作", url: "https://simpark.cn/cases/multi-scene" },
    ],
  },
];

export type KnowledgeCat = {
  key: string;
  label: string;
};

export const KNOWLEDGE_CATS: KnowledgeCat[] = [
  { key: "dataset", label: "公开数据集" },
  { key: "paper", label: "技术论文" },
  { key: "tutorial", label: "教程视频" },
  { key: "discuss", label: "社区讨论" },
];

export type KnowledgeItem = {
  cat: string;
  title: string;
  source: string;
  date: string;
  reads: number;
};

export const KNOWLEDGE_ITEMS: KnowledgeItem[] = [
  {
    cat: "dataset",
    title: "OpenX-Embodiment 中文镜像与清洗说明",
    source: "社区知识库",
    date: "2026-07-28",
    reads: 3120,
  },
  {
    cat: "paper",
    title: "端到端 VLA 操作模型的稀疏奖励训练方法",
    source: "星海图 StarSea",
    date: "2026-07-21",
    reads: 2084,
  },
  {
    cat: "tutorial",
    title: "从仿真到真机：迁移学习 30 分钟上手",
    source: "银河通用 Galbot",
    date: "2026-07-15",
    reads: 1765,
  },
  {
    cat: "discuss",
    title: "如何为抓取任务设计高质量遥操作标注？",
    source: "社区讨论",
    date: "2026-07-09",
    reads: 980,
  },
  {
    cat: "dataset",
    title: "四足机器人步态真值数据集 v2 发布",
    source: "宇树科技 Unitree",
    date: "2026-07-02",
    reads: 2540,
  },
  {
    cat: "paper",
    title: "具身智能评测基准综述（2026）",
    source: "社区知识库",
    date: "2026-06-26",
    reads: 1890,
  },
];

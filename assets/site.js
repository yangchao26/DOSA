const docs = [
  { id: "BRK-1-16", category: "brick", en: "Isolated 1/16th Brick DC/DC Converter", zh: "隔离式 1/16 砖 DC/DC 转换器", date: "2004-09-27", href: "Brick/DOSA_16th_brick_Specifications.pdf", kind: "PDF" },
  { id: "BRK-1-32", category: "brick", en: "Isolated 1/32 Brick DC/DC Converter", zh: "隔离式 1/32 砖 DC/DC 转换器", date: "2011-09-07", href: "Brick/DOSA_32nd_brick_Specifications.pdf", kind: "PDF" },
  { id: "BRK-HCQ", category: "brick", en: "High Current Quarter-Brick Pinout", zh: "高电流 1/4 砖引脚定义", date: "2004-10-28", href: "Brick/DOSA_High_Current_Qtr_brick_PinOut.pdf", kind: "PDF" },
  { id: "BRK-1-8", category: "brick", en: "Eighth Brick DC/DC Converter", zh: "1/8 砖 DC/DC 转换器", date: "2006-05-09", href: "Brick/DOSA_Spec_Eighth-Brick_5-9-06.pdf", kind: "PDF" },
  { id: "BRK-1-4", category: "brick", en: "Single Output Pin Quarter Brick DC/DC Converter", zh: "单输出引脚 1/4 砖 DC/DC 转换器", date: "2006-05-09", href: "Brick/DOSA_Spec_Quarter-Brick_5-9-06.pdf", kind: "PDF" },
  { id: "BRK-1-2", category: "brick", en: "Single Output Pin Half Brick DC/DC Converter", zh: "单输出引脚 1/2 砖 DC/DC 转换器", date: "2006-05-09", href: "Brick/DOSA_Spec_Half-Brick_5-9-06.pdf", kind: "PDF" },
  { id: "BRK-2G-1-8", category: "brick", en: "Second Generation Eighth Brick with Digital Connections", zh: "第二代带数字连接 1/8 砖", date: "2010-06-16", href: "Brick/Second_Generation_DOSA_Spec_Eighth-Brick_6-16-10.pdf", kind: "PDF" },
  { id: "BRK-2G-1-4", category: "brick", en: "Second Generation Quarter Brick with Digital Connections", zh: "第二代带数字连接 1/4 砖", date: "2010-06-16", href: "Brick/Second_Generation_DOSA_Spec_Quarter-Brick_6-16-10.pdf", kind: "PDF" },
  { id: "POL-12V-6A", category: "pol", en: "Non-Isolated 9.6-14.4Vin, 5/6A DC/DC Converter", zh: "非隔离 9.6-14.4Vin，5/6A DC/DC 转换器", date: "2005-03-28", href: "POL/12Vin_6A.pdf", kind: "PDF" },
  { id: "POL-12V-10A", category: "pol", en: "Non-Isolated 9.6-14.4Vin, 10A DC/DC Converter", zh: "非隔离 9.6-14.4Vin，10A DC/DC 转换器", date: "2005-03-28", href: "POL/12Vin_10A.pdf", kind: "PDF" },
  { id: "POL-12V-16A", category: "pol", en: "Non-Isolated 9.6-14.4Vin, 15/16/20A DC/DC Converter", zh: "非隔离 9.6-14.4Vin，15/16/20A DC/DC 转换器", date: "2005-03-28", href: "POL/12Vin_16A.pdf", kind: "PDF" },
  { id: "POL-3V3-6A", category: "pol", en: "Non-Isolated 3.0-5.5Vin, 5/6A DC/DC Converter", zh: "非隔离 3.0-5.5Vin，5/6A DC/DC 转换器", date: "2005-03-28", href: "POL/3_3Vin_6A.pdf", kind: "PDF" },
  { id: "POL-3V3-10A", category: "pol", en: "Non-Isolated 3.0-5.5Vin, 10A DC/DC Converter", zh: "非隔离 3.0-5.5Vin，10A DC/DC 转换器", date: "2005-03-28", href: "POL/3_3Vin_10A.pdf", kind: "PDF" },
  { id: "POL-3V3-16A", category: "pol", en: "Non-Isolated 3.0-5.5Vin, 15/16/20A DC/DC Converter", zh: "非隔离 3.0-5.5Vin，15/16/20A DC/DC 转换器", date: "2005-03-28", href: "POL/3_3Vin_16A.pdf", kind: "PDF" },
  { id: "POL-HD-3-6A-LOW", category: "pol", en: "2nd Gen HD 2.4-5.5Vin, 3/6A DC/DC Converter", zh: "第二代高密度 2.4-5.5Vin，3/6A DC/DC 转换器", date: "2007-04-20", href: "POL/DOSA_Spec_2nd_Gen_HD_2_4-5_5Vin_0_6-3_6Vout_3-3_6A.pdf", kind: "PDF" },
  { id: "POL-HD-12A-LOW", category: "pol", en: "2nd Gen HD 2.4-5.5Vin, 12A DC/DC Converter", zh: "第二代高密度 2.4-5.5Vin，12A DC/DC 转换器", date: "2007-05-04", href: "POL/DOSA_Spec_2nd_Gen_HD_2_4-5_5Vin_0_6-3_6Vout_12A.pdf", kind: "PDF" },
  { id: "POL-HD-20A-LOW", category: "pol", en: "2nd Gen HD 2.4-5.5Vin, 20A DC/DC Converter", zh: "第二代高密度 2.4-5.5Vin，20A DC/DC 转换器", date: "2007-05-04", href: "POL/DOSA_Spec_2nd_Gen_HD_2_4-5_5Vin_0_6-3_6Vout_20A.pdf", kind: "PDF" },
  { id: "POL-HD-3-6A-HIGH", category: "pol", en: "2nd Gen HD 4.5-14Vin, 3/6A DC/DC Converter", zh: "第二代高密度 4.5-14Vin，3/6A DC/DC 转换器", date: "2007-04-20", href: "POL/DOSA_Spec_2nd_Gen_HD_4_5-14Vin_0_59-5_5Vout_3_6A.pdf", kind: "PDF" },
  { id: "POL-HD-12A-HIGH", category: "pol", en: "2nd Gen HD 4.5-14Vin, 12A DC/DC Converter", zh: "第二代高密度 4.5-14Vin，12A DC/DC 转换器", date: "2007-05-04", href: "POL/DOSA_Spec_2nd_Gen_HD_4_5-14Vin_0_69-5_5Vout_12A.pdf", kind: "PDF" },
  { id: "POL-HD-20A-HIGH", category: "pol", en: "2nd Gen HD 4.5-14Vin, 20A DC/DC Converter", zh: "第二代高密度 4.5-14Vin，20A DC/DC 转换器", date: "2007-05-04", href: "POL/DOSA_Spec_2nd_Gen_HD_4_5-14Vin_0_69-5_5Vout_20A.pdf", kind: "PDF" },
  { id: "POL-PICO-3G", category: "pol", en: "Third Generation High Density PICO Converter", zh: "第三代高密度 PICO 转换器", date: "2010-08-12", href: "POL/DOSA%20Third%20Generation%20High%20Density%20PICO%20Specifications.pdf", kind: "PDF" },
  { id: "POL-MICRO-3G", category: "pol", en: "Third Generation High Density MICRO Converter", zh: "第三代高密度 MICRO 转换器", date: "2010-09-15", href: "POL/DOSA%20Third%20Generation%20High%20Density%20MICRO%20Specifications.pdf", kind: "PDF" },
  { id: "POL-LGA", category: "reference", en: "DOSA LGA Industry Standards and Technical Drivers", zh: "DOSA LGA 行业标准与技术驱动因素", date: "2011-06", href: "POL/DOSA%20LGA.pdf", kind: "PDF" },
  { id: "BRICK-SIZE-XLSX", category: "reference", en: "DOSA Brick package reference workbook", zh: "DOSA 砖式封装参考表格", date: "2022-04-19", href: "DOSA%20Bricks.xlsx", kind: "XLSX" }
];

const labels = {
  en: {
    all: "All standards",
    brick: "Brick modules",
    pol: "POL modules",
    reference: "Reference",
    search: "Search standards",
    none: "No documents match the current filter.",
    columns: ["Standard ID", "Category", "Title", "Release", "Document"]
  },
  zh: {
    all: "全部标准",
    brick: "砖式模块",
    pol: "POL 模块",
    reference: "参考资料",
    search: "搜索标准",
    none: "没有符合当前筛选条件的文档。",
    columns: ["标准编号", "类别", "标题", "发布日期", "文档"]
  }
};

function categoryLabel(category, lang) {
  return labels[lang][category] || labels[lang].reference;
}

function renderTable() {
  const table = document.querySelector("[data-doc-table]");
  if (!table) return;
  const lang = document.documentElement.lang === "zh-CN" ? "zh" : "en";
  const active = document.querySelector(".filter.active")?.dataset.filter || "brick";
  const query = document.querySelector("[data-doc-search]")?.value.trim().toLowerCase() || "";
  const visible = docs.filter((doc) => {
    const byFilter = active === "all" || doc.category === active;
    const haystack = `${doc.id} ${doc.en} ${doc.zh} ${doc.kind}`.toLowerCase();
    return byFilter && haystack.includes(query);
  });

  table.innerHTML = `
    <thead>
      <tr>${labels[lang].columns.map((label) => `<th>${label}</th>`).join("")}</tr>
    </thead>
    <tbody>
      ${visible.length ? visible.map((doc) => `
        <tr>
          <td>${doc.id}</td>
          <td>${categoryLabel(doc.category, lang)}</td>
          <td>${doc[lang]}</td>
          <td>${doc.date}</td>
          <td><span class="download-cell"><a href="${doc.href}" target="_blank" rel="noopener">${doc.kind}</a></span></td>
        </tr>`).join("") : `
        <tr><td colspan="5">${labels[lang].none}</td></tr>`}
    </tbody>`;
}

function initLibrary() {
  const lang = document.documentElement.lang === "zh-CN" ? "zh" : "en";
  document.querySelectorAll("[data-filter-label]").forEach((button) => {
    button.textContent = labels[lang][button.dataset.filterLabel];
  });
  const search = document.querySelector("[data-doc-search]");
  if (search) {
    search.placeholder = labels[lang].search;
    search.addEventListener("input", renderTable);
  }
  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderTable();
    });
  });
  renderTable();
}

document.addEventListener("DOMContentLoaded", () => {
  initLibrary();
});

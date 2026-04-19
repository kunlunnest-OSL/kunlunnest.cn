/**
 * 新闻数据转换脚本
 * 将 news-data.csv 转换为 public/data/news.json
 *
 * 使用方法：
 * 1. 编辑根目录的 news-data.csv 文件
 * 2. 双击运行 update-news.bat
 * 3. 刷新网站即可看到更新
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 文件路径
const CSV_FILE = path.join(__dirname, '../news-data.csv');
const JSON_FILE = path.join(__dirname, '../public/data/news.json');

// 确保目录存在
const dataDir = path.dirname(JSON_FILE);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

console.log('📰 开始转换新闻数据...\n');

try {
  // 读取CSV文件
  const csvContent = fs.readFileSync(CSV_FILE, 'utf-8');
  const lines = csvContent.trim().split('\n');

  if (lines.length < 2) {
    throw new Error('CSV文件为空或格式错误');
  }

  // 解析表头
  const headers = lines[0].split(',');
  console.log(`✓ 读取到 ${headers.length} 个字段: ${headers.join(', ')}`);

  // 解析数据行
  const newsData = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue; // 跳过空行

    // 简单的CSV解析（处理逗号分隔）
    const values = parseCSVLine(line);

    if (values.length !== headers.length) {
      console.warn(`⚠ 警告: 第 ${i + 1} 行字段数量不匹配，跳过`);
      continue;
    }

    // 构建对象
    const newsItem = {};
    headers.forEach((header, index) => {
      let value = values[index].trim();

      // 转换数据类型
      if (header === 'id') {
        value = parseInt(value);
      }

      newsItem[header] = value;
    });

    newsData.push(newsItem);
  }

  console.log(`✓ 成功解析 ${newsData.length} 条新闻\n`);

  // 写入JSON文件
  fs.writeFileSync(
    JSON_FILE,
    JSON.stringify(newsData, null, 2),
    'utf-8'
  );

  console.log(`✅ 转换完成！`);
  console.log(`   输入文件: ${CSV_FILE}`);
  console.log(`   输出文件: ${JSON_FILE}`);
  console.log(`   新闻数量: ${newsData.length} 条\n`);
  console.log('💡 现在可以刷新网站查看更新了！\n');

  // 显示最新的3条新闻
  console.log('📋 最新的3条新闻:');
  newsData.slice(0, 3).forEach((item, index) => {
    console.log(`   ${index + 1}. [${item.date}] ${item.title}`);
  });

} catch (error) {
  console.error('\n❌ 转换失败:', error.message);
  console.error('\n请检查:');
  console.error('  1. news-data.csv 文件是否存在');
  console.error('  2. CSV 格式是否正确（用Excel打开检查）');
  console.error('  3. 每行的字段数量是否一致\n');
  process.exit(1);
}

/**
 * 简单的CSV行解析函数
 * 处理包含逗号的字段（需要用引号包围）
 */
function parseCSVLine(line) {
  const values = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      values.push(current);
      current = '';
    } else {
      current += char;
    }
  }

  // 添加最后一个值
  values.push(current);

  return values;
}

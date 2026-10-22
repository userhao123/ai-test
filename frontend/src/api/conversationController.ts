// 对话控制器 - 导出duihuajiekou并添加类型定义
export * from './duihuajiekou'

import request from '@/request'

/**
 * 自动生成提示词变体请求
 */
export interface GenerateVariantsRequest {
  /** 基础提示词 */
  basePrompt: string
  /** 变体数量 */
  count: number
}

/**
 * 根据基础提示词自动生成多个不同风格的提示词变体
 */
export async function generateVariants(params: GenerateVariantsRequest) {
  return request<API.BaseResponse<string[]>>({
    url: '/conversation/generate-variants',
    method: 'POST',
    data: params
  })
}

/**
 * 代码块接口
 */
export interface CodeBlock {
  language: string
  code: string
  sanitizedHtml?: string
  startIndex?: number
  endIndex?: number
}

/**
 * 联网搜索来源
 */
export interface WebSearchSource {
  url?: string
  title?: string
}

/**
 * 联网搜索信息
 */
export interface WebSearchInfo {
  enabled?: boolean
  query?: string
  engine?: string
  sources?: WebSearchSource[]
}

/**
 * 工具使用信息
 */
export interface ToolsUsedInfo {
  webSearch?: WebSearchInfo
}

/**
 * 流式响应数据块
 */
export interface StreamChunkVO {
  conversationId?: string
  modelName?: string
  variantIndex?: number
  content?: string
  fullContent?: string
  inputTokens?: number
  outputTokens?: number
  totalTokens?: number
  elapsedMs?: number
  responseTimeMs?: number
  cost?: number
  done?: boolean
  error?: string
  hasError?: boolean
  reasoning?: string
  hasReasoning?: boolean
  thinkingTime?: number
  messageIndex?: number
  codeBlocks?: CodeBlock[]
  hasCodeBlocks?: boolean
  toolsUsed?: string
}

package com.yupi.template.model.dto.conversation;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.io.Serializable;

/**
 * Prompt Lab 单模型多提示词对比请求,自动生成变体
 *
 */
@Data
@Schema(description = "Prompt Lab单模型多提示词对比请求,,自动生成变体")
public class GenerateVariantsRequest implements Serializable {

    /**
     * 基础提示词
     */
    @Schema(description = "基础提示词")
    private String basePrompt;

    /**
     * 变体数
     */
    @Schema(description = "变体数")
    private int count;

}

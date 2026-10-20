# 校园综合社区论坛系统

基于 Spring Boot 3、Vue 3 和 JWT 的前后端分离社区论坛，包含用户与权限管理、帖子互动、通知和 AI 助手等功能。

## 技术栈

- 后端：Java 17、Spring Boot、Spring Security、MyBatis-Plus、JWT
- 数据与中间件：MySQL、Redis、RabbitMQ、Elasticsearch、MinIO
- 前端：Vue 3、Vue Router、Axios、Element Plus
- AI：Spring AI 与 DeepSeek 模型接口

## 项目结构

- `my-project-backend/`：REST API、认证授权、消息处理和数据访问
- `my-project-frontend/`：社区论坛前端

## 本地配置

敏感配置通过环境变量注入。请先配置本地 MySQL、Redis、RabbitMQ、Elasticsearch 和 MinIO 服务，并设置相应环境变量。AI、天气和邮件功能分别需要配置 `DEEPSEEK_API_KEY`、`WEATHER_API_KEY` 和邮件凭据。

`study.sql` 中原有的真实演示数据未纳入公开仓库。请使用自己的测试数据初始化数据库；不要提交真实用户数据、密钥或本地配置。

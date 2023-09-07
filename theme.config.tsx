import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

export default {
  faviconGlyph: '🌈',
  logo: <span>Api_docs</span>,
  // project: {
  //     link: 'https://www.github.com',
  // },
  docsRepositoryBase: 'https://www.caiths.com',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        // 设置浏览器标题
        titleTemplate: '%s – Api_docs'
      }
    }
  },
  // 前往主页
  feedback: {
    content: 'More? Go to website →',
    labels: 'leave',
    useLink: () => {
      // 在这里实现您的自定义链接逻辑
      return 'https://iot.caiths.com';
    }
  },
  // 编辑文档
  editLink: {
    text: '前往主页'
  },
  // 页面底部版权信息
  footer: {
    text: (
        <span>
            MIT {new Date().getFullYear()} ©{' '}
          <a href="https://www.caiths.com" target="_blank">
            温瞳
    </a>
    .
    </span>
    )
  }
}


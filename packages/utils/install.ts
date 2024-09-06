import type { Plugin, App } from 'vue'

type SFCWithInstall<T> = T & Plugin

export function makeInstaller(components: Plugin[]): Plugin {
  return (app: App) => {
    components.forEach((e) => app.use(e))
  }
}

export function withInstall<T>(component: T) {
  (component as SFCWithInstall<T>).install = (app: App) => {
    app.component((component as any).name, component as Plugin)
  }

  return component as SFCWithInstall<T>
}

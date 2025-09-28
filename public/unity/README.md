# Unity WebGL Build Files

Поместите файлы Unity WebGL билда в эту папку:

## Структура:

```
public/unity/
├── Build/
│   ├── AngryBots.data.gz
│   ├── AngryBots.framework.js.gz
│   ├── AngryBots.loader.js
│   └── AngryBots.wasm.gz
└── StreamingAssets/ (если есть)
```

## Как добавить:

1. Сделайте WebGL билд в Unity
2. Скопируйте папку `Build/` сюда
3. Скопируйте `StreamingAssets/` если есть
4. НЕ копируйте `index.html` и `TemplateData/`

## Настройки Unity для билда:

- Platform: WebGL
- Compression: Gzip или Brotli
- Texture Compression: DXT или ASTC
- Code Stripping: Minimal или Low

{-# LANGUAGE OverloadedStrings #-}

import Hakyll
  ( Configuration (destinationDirectory),
    compile,
    constRoute,
    copyFileCompiler,
    defaultConfiguration,
    defaultContext,
    defaultHakyllReaderOptions,
    defaultHakyllWriterOptions,
    hakyllWith,
    idRoute,
    loadAndApplyTemplate,
    match,
    pandocCompilerWith,
    relativizeUrls,
    route,
    templateBodyCompiler,
  )
import Text.Pandoc.Extensions
  ( Extension (Ext_fenced_divs),
    enableExtension,
  )
import Text.Pandoc.Options
  ( ReaderOptions,
    readerExtensions,
  )

config :: Configuration
config =
  defaultConfiguration
    { destinationDirectory = "generated"
    }

main :: IO ()
main = hakyllWith config $ do
  match "content/index.md" $ do
    route $ constRoute "index.html"
    compile $
      pandocCompilerWith readerOptions defaultHakyllWriterOptions
        >>= loadAndApplyTemplate "templates/default.html" defaultContext
        >>= relativizeUrls
  match "css/*" $ do
    route idRoute
    compile copyFileCompiler
  match "templates/*" $ do
    compile templateBodyCompiler

readerOptions :: ReaderOptions
readerOptions =
  defaultHakyllReaderOptions
    { readerExtensions =
        enableExtension Ext_fenced_divs $
          readerExtensions defaultHakyllReaderOptions
    }

{-# LANGUAGE OverloadedStrings #-}

import Hakyll
  ( Configuration (destinationDirectory),
    compile,
    constRoute,
    copyFileCompiler,
    defaultConfiguration,
    defaultContext,
    hakyllWith,
    idRoute,
    loadAndApplyTemplate,
    match,
    pandocCompiler,
    relativizeUrls,
    route,
    templateBodyCompiler,
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
      pandocCompiler
        >>= loadAndApplyTemplate "templates/default.html" defaultContext
        >>= relativizeUrls
  match "css/*" $ do
    route idRoute
    compile copyFileCompiler
  match "templates/*" $ do
    compile templateBodyCompiler

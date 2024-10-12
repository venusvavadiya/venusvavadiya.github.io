{-# LANGUAGE OverloadedStrings #-}

import Hakyll
  ( Configuration (destinationDirectory),
    compile,
    constRoute,
    defaultConfiguration,
    defaultContext,
    hakyllWith,
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
  match "templates/*" $ do
    compile templateBodyCompiler

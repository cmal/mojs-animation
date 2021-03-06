(defproject mojs-animation "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.122"]
                 [reagent "0.5.1"]]

  :source-paths ["src/clj"]

  :plugins [[lein-cljsbuild "1.0.6"]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target" "test/js"]

  :cljsbuild {:builds           [{:id           "prod"
                                  :source-paths ["src/cljs"]
                                  :compiler     {:output-to     "resources/public/js/compiled/app.js"
                                                 :optimizations :whitespace
                                                 :pretty-print  false}}]
              :externs          ["resources/public/vendor/js/mo.min.js"]
              :closure-warnings {:externs-validation :off
                                 :non-standard-jsdoc :off}})

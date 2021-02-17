(ns code-evaluator.env
  (:require
    [selmer.parser :as parser]
    [clojure.tools.logging :as log]
    [code-evaluator.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[code-evaluator started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[code-evaluator has shut down successfully]=-"))
   :middleware wrap-dev})

(ns code-evaluator.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[code-evaluator started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[code-evaluator has shut down successfully]=-"))
   :middleware identity})

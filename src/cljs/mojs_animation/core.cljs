(ns mojs-animation.core
  (:require [reagent.core :as reagent]))

#_(defn translate-y [node]
    (fn [progress]
      (set! (-> node .-style .-transform)
            (str "translateY(" (* 200 progress) "px)"))))



#_(defn animation-did-mount [this]    
    (.run
     (js/mojs.Tween.
      (clj->js
       {:repeat   999
        :delay    2000
        :onUpdate (translate-y (reagent/dom-node this))}))))

(defn circle-0 [this]
  (.play
   (js/mojs.Shape.
    (clj->js
     {:shape    "circle"
      :scale    {:0 1}
      :duration 1000
      :delay    1000
      :easing   "cubic.out"
      :repeat   999}))))


(defn circle-1 [this]
  (.play
   (js/mojs.Shape.
    (clj->js
     {:shape    "circle"
      :scale    {:0 1}
      :left     "25%"
      :fill     {:cyan "yellow"}
      :radius   25
      :duration 2000
      :repeat   999}))))

(defn rect-2 [this]
  (.play
   (js/mojs.Shape.
    (clj->js
     {:shape            "rect"
      :left             "50%"
      :fill             "none"
      :radius           20
      :stroke           {"rgba(0,255,255,1)" "magenta"}
      :strokeWidth      {:10 0}
      :strokeDasharray  "100%"
      :strokeDashoffset {"-100%" "100%"}
      :angle            {:0 180}
      :duration         2000
      :repeat           999}))))

(defn polygon-3 [this]
  (.play
   (js/mojs.Shape.
    (clj->js
     {:shape    "polygon"
      :points   5
      :left     "75%"
      :fill     {"deeppink" "#00F87F"}
      :x        {"rand(-100%,-200%)" 0}
      :angle    {:0 "rand(0,360)"}
      :radius   25
      :duration 2000
      :repeat   999}))))

(defn animation-0 []
  (reagent/create-class {:render              (fn [] [:div.square])
                         :component-did-mount circle-0}))

(defn animation-1 []
  (reagent/create-class {:render              (fn [] [:div.square])
                         :component-did-mount circle-1}))

(defn animation-2 []
  (reagent/create-class {:render              (fn [] [:div.square])
                         :component-did-mount rect-2}))

(defn animation-3 []
  (reagent/create-class {:render              (fn [] [:div.square])
                         :component-did-mount polygon-3}))

(defn animation []
  [:div
   [animation-0]
   [animation-1]
   [animation-2]
   [animation-3]])

(defn ^:export main []
  (reagent/render [animation]
                  (.getElementById js/document "app")))


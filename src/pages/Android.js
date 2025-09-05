import React from "react";
import LeftContainer from "../components/containers/LeftContainer";
import RightContainer from "../components/containers/RightContainer";
import './roadmapPages.css';

export default function Android(){
  return(
    <>
      <div className="sectionWrapper">
        <div className="sectionHeader" >
          Android Developer
        </div>
          
        <LeftContainer text='Language Selection' links={[
          {url:'https://kotlinlang.org/docs/basic-syntax.html', text:'Kotlin'},
          {url:'https://www.w3schools.com/java/default.asp', text:'Java'},
          {url:'https://developer.android.com/kotlin', text:'Kotlin First'},
          {url:'https://developer.android.com/courses/kotlin-bootcamp/overview', text:'Kotlin Bootcamp'},
          {url:'https://www.youtube.com/watch?v=F9UC9DY-vIU&ab_channel=freeCodeCamp.org', text:'Kotlin Course'},
        ]} />

        <RightContainer text='The Fundamentals' links={[
          {url:'https://developer.android.com/studio', text:'Android Studio'},
          {url:'https://kotlinlang.org/docs/basic-syntax.html', text:'Kotlin Basics'},
          {url:'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/', text:'OOP Concepts'},
          {url:'https://www.geeksforgeeks.org/data-structures/', text:'Data Structures'},
          {url:'https://www.geeksforgeeks.org/fundamentals-of-algorithms/', text:'Algorithms'},
        ]} />

        <LeftContainer text='' links={[
          {url:'https://developer.android.com/studio/build/gradle', text:'Gradle'},
          {url:'https://developer.android.com/courses/android-basics-compose/course', text:'Hello World App'},
          {url:'https://developer.android.com/training/basics/firstapp', text:'First App Tutorial'},
          {url:'https://developer.android.com/studio/intro', text:'Studio Introduction'},
        ]}/>

        <RightContainer text='Version Control' links={[
          {url:'https://git-scm.com/docs', text:'Git'},
          {url:'https://www.youtube.com/watch?v=SWYqp7iY_Tc&ab_channel=TraversyMedia', text:'Git Crash Course'},
          {url:'https://github.com/', text:'GitHub'},
          {url:'https://bitbucket.org/', text:'Bitbucket'},
          {url:'https://gitlab.com/', text:'GitLab'},
        ]} />

        <LeftContainer text='' links={[
          {url:'https://www.youtube.com/watch?v=w3jLJU7DT5E&ab_channel=GitHub', text:'What is GitHub?'},
          {url:'https://www.youtube.com/watch?v=wpISo9TNjfU&ab_channel=IBMTechnology', text:'Git vs GitHub'},
          {url:'https://docs.github.com/en/get-started', text:'GitHub Getting Started'},
        ]}/>

        <RightContainer text='App Components' links={[
          {url:'https://developer.android.com/guide/components/activities', text:'Activity'},
          {url:'https://developer.android.com/guide/components/services', text:'Services'},
          {url:'https://developer.android.com/guide/components/content-providers', text:'Content Provider'},
          {url:'https://developer.android.com/guide/components/broadcasts', text:'Broadcast Receiver'},
          {url:'https://developer.android.com/guide/components/intents-filters', text:'Intent'},
        ]} />

        <LeftContainer text='' links={[
          {url:'https://developer.android.com/guide/components/activities/activity-lifecycle', text:'Activity LifeCycle'},
          {url:'https://developer.android.com/guide/components/activities/state-changes', text:'State Changes'},
          {url:'https://developer.android.com/guide/components/activities/tasks-and-back-stack', text:'Tasks & Backstack'},
          {url:'https://developer.android.com/guide/components/intents-filters#Types', text:'Implicit Intents'},
        ]}/>

        <RightContainer text='Design & Architecture' links={[
          {url:'https://developer.android.com/guide/topics/ui/layout', text:'Layouts'},
          {url:'https://developer.android.com/guide/topics/ui/layout/frame', text:'Frame Layout'},
          {url:'https://developer.android.com/guide/topics/ui/layout/linear', text:'Linear Layout'},
          {url:'https://developer.android.com/guide/topics/ui/layout/relative', text:'Relative Layout'},
          {url:'https://developer.android.com/guide/topics/ui/layout/constraint', text:'Constraint Layout'},
        ]} />

        <LeftContainer text='' links={[
          {url:'https://developer.android.com/guide/topics/ui/layout/recyclerview', text:'RecyclerView'},
          {url:'https://developer.android.com/guide/topics/ui/controls', text:'UI Controls'},
          {url:'https://developer.android.com/guide/components/fragments', text:'Fragments'},
          {url:'https://developer.android.com/guide/topics/ui/dialogs', text:'Dialogs'},
          {url:'https://developer.android.com/guide/topics/ui/notifiers/toasts', text:'Toast'},
        ]}/>

        <RightContainer text='' links={[
          {url:'https://developer.android.com/guide/topics/ui/layout/listview', text:'ListView'},
          {url:'https://developer.android.com/guide/topics/ui/layout/bottom-sheet', text:'Bottom Sheet'},
          {url:'https://developer.android.com/guide/navigation/navigation-ui', text:'Navigation Drawer'},
          {url:'https://developer.android.com/guide/navigation/navigation-ui#tabs', text:'Tabs'},
          {url:'https://developer.android.com/guide/topics/ui/animations', text:'Animations'},
        ]} />

        <LeftContainer text='Jetpack Compose' links={[
          {url:'https://developer.android.com/jetpack/compose', text:'Compose Introduction'},
          {url:'https://developer.android.com/courses/jetpack-compose/course', text:'Compose Course'},
          {url:'https://developer.android.com/jetpack/compose/state', text:'State Management'},
          {url:'https://developer.android.com/jetpack/compose/navigation', text:'Navigation'},
          {url:'https://developer.android.com/jetpack/compose/performance', text:'Performance'},
        ]}/>

        <RightContainer text='Architectural Patterns' links={[
          {url:'https://developer.android.com/topic/libraries/architecture/guide-to-app-architecture', text:'App Architecture'},
          {url:'https://developer.android.com/topic/libraries/architecture/viewmodel', text:'MVVM'},
          {url:'https://developer.android.com/topic/libraries/architecture/livedata', text:'LiveData'},
          {url:'https://developer.android.com/topic/libraries/architecture/guide-to-app-architecture', text:'MVP Pattern'},
          {url:'https://developer.android.com/topic/libraries/architecture/guide-to-app-architecture', text:'MVC Pattern'},
        ]} />

        <LeftContainer text='' links={[
          {url:'https://developer.android.com/topic/libraries/architecture/guide-to-app-architecture', text:'MVI Pattern'},
          {url:'https://developer.android.com/topic/libraries/architecture/guide-to-app-architecture', text:'Repository Pattern'},
          {url:'https://refactoring.guru/design-patterns/builder', text:'Builder Pattern'},
          {url:'https://refactoring.guru/design-patterns/factory-method', text:'Factory Pattern'},
          {url:'https://refactoring.guru/design-patterns/observer', text:'Observer Pattern'},
        ]}/>

        <RightContainer text='Asynchronism' links={[
          {url:'https://developer.android.com/kotlin/flow', text:'Flow'},
          {url:'https://github.com/ReactiveX/RxJava', text:'RxJava'},
          {url:'https://github.com/ReactiveX/RxKotlin', text:'RxKotlin'},
          {url:'https://developer.android.com/kotlin/coroutines', text:'Coroutines'},
          {url:'https://developer.android.com/guide/components/processes-and-threads', text:'Threads'},
        ]} />

        <LeftContainer text='' links={[
          {url:'https://developer.android.com/kotlin/coroutines/coroutines-adv', text:'Advanced Coroutines'},
          {url:'https://developer.android.com/kotlin/flow/stateflow-and-sharedflow', text:'StateFlow & SharedFlow'},
          {url:'https://developer.android.com/kotlin/coroutines/coroutines-best-practices', text:'Coroutines Best Practices'},
        ]}/>

        <RightContainer text='Dependency Injection' links={[
          {url:'https://dagger.dev/', text:'Dagger'},
          {url:'https://insert-koin.io/', text:'Koin'},
          {url:'https://dagger.dev/hilt/', text:'Hilt'},
          {url:'https://kodein.org/', text:'Kodein'},
          {url:'https://developer.android.com/training/dependency-injection', text:'DI Guide'},
        ]} />

        <LeftContainer text='' links={[
          {url:'https://developer.android.com/training/dependency-injection/hilt-android', text:'Hilt Android'},
          {url:'https://developer.android.com/training/dependency-injection/hilt-testing', text:'Hilt Testing'},
          {url:'https://developer.android.com/training/dependency-injection/manual', text:'Manual DI'},
        ]}/>

        <RightContainer text='Storage' links={[
          {url:'https://developer.android.com/training/data-storage/shared-preferences', text:'Shared Preferences'},
          {url:'https://developer.android.com/topic/libraries/architecture/datastore', text:'DataStore'},
          {url:'https://developer.android.com/training/data-storage/room', text:'Room Database'},
          {url:'https://developer.android.com/training/data-storage/files', text:'File System'},
          {url:'https://developer.android.com/training/data-storage', text:'Storage Options'},
        ]} />

        <LeftContainer text='' links={[
          {url:'https://developer.android.com/topic/libraries/architecture/datastore/preferences-datastore', text:'Preferences DataStore'},
          {url:'https://developer.android.com/topic/libraries/architecture/datastore/typed-datastore', text:'Typed DataStore'},
          {url:'https://developer.android.com/training/data-storage/sqlite', text:'SQLite'},
        ]}/>

        <RightContainer text='Network' links={[
          {url:'https://square.github.io/retrofit/', text:'Retrofit'},
          {url:'https://square.github.io/okhttp/', text:'OkHttp'},
          {url:'https://www.apollographql.com/docs/android/', text:'Apollo Android'},
          {url:'https://developer.android.com/training/volley', text:'Volley'},
          {url:'https://developer.android.com/training/basics/network-ops', text:'Network Operations'},
        ]} />

        <LeftContainer text='' links={[
          {url:'https://developer.android.com/training/volley/simple', text:'Simple Requests'},
          {url:'https://developer.android.com/training/volley/request', text:'Custom Requests'},
          {url:'https://developer.android.com/training/volley/request-cache', text:'Caching'},
        ]}/>

        <RightContainer text='Work Management' links={[
          {url:'https://developer.android.com/topic/libraries/architecture/workmanager', text:'WorkManager'},
          {url:'https://developer.android.com/topic/libraries/architecture/workmanager/basics', text:'WorkManager Basics'},
          {url:'https://developer.android.com/topic/libraries/architecture/workmanager/advanced', text:'Advanced WorkManager'},
          {url:'https://developer.android.com/topic/libraries/architecture/workmanager/testing', text:'WorkManager Testing'},
          {url:'https://developer.android.com/topic/libraries/architecture/workmanager/migrating', text:'Migration Guide'},
        ]} />

        <LeftContainer text='' links={[
          {url:'https://developer.android.com/topic/libraries/architecture/workmanager/define-work', text:'Define Work'},
          {url:'https://developer.android.com/topic/libraries/architecture/workmanager/schedule-work', text:'Schedule Work'},
          {url:'https://developer.android.com/topic/libraries/architecture/workmanager/constraints', text:'Work Constraints'},
        ]}/>

        <RightContainer text='Firebase & Google Services' links={[
          {url:'https://firebase.google.com/docs/auth', text:'Authentication'},
          {url:'https://firebase.google.com/docs/crashlytics', text:'Crashlytics'},
          {url:'https://firebase.google.com/docs/remote-config', text:'Remote Config'},
          {url:'https://firebase.google.com/docs/cloud-messaging', text:'Cloud Messaging'},
          {url:'https://firebase.google.com/docs/firestore', text:'Firestore'},
        ]} />

        <LeftContainer text='' links={[
          {url:'https://firebase.google.com/', text:'Firebase'},
          {url:'https://admob.google.com/', text:'Google AdMob'},
          {url:'https://developers.google.com/android', text:'Google Play Services'},
          {url:'https://developers.google.com/maps/documentation/android', text:'Google Maps'},
          {url:'https://firebase.google.com/docs/android/setup', text:'Firebase Setup'},
        ]}/>

        <RightContainer text='Quality & Maintenance' links={[
          {url:'https://ktlint.github.io/', text:'Ktlint'},
          {url:'https://detekt.github.io/detekt/', text:'Detekt'},
          {url:'https://github.com/JakeWharton/timber', text:'Timber'},
          {url:'https://square.github.io/leakcanary/', text:'Leak Canary'},
          {url:'https://github.com/ChuckerTeam/chucker', text:'Chucker'},
        ]} />

        <LeftContainer text='' links={[
          {url:'https://developer.android.com/training/testing', text:'Testing Guide'},
          {url:'https://developer.android.com/training/testing/espresso', text:'Espresso'},
          {url:'https://developer.android.com/training/testing/junit', text:'JUnit'},
          {url:'https://developer.android.com/topic/performance/benchmarking', text:'Jetpack Benchmark'},
          {url:'https://developer.android.com/training/testing/unit-testing', text:'Unit Testing'},
        ]}/>

        <RightContainer text='Distribution' links={[
          {url:'https://firebase.google.com/docs/app-distribution', text:'Firebase Distribution'},
          {url:'https://developer.android.com/distribute/google-play', text:'Google Play Store'},
          {url:'https://developer.android.com/studio/publish/app-signing', text:'Signed APK'},
          {url:'https://developer.android.com/studio/publish', text:'Publishing Guide'},
          {url:'https://developer.android.com/guide/app-bundle', text:'App Bundle'},
        ]} />

        <LeftContainer text='' links={[
          {url:'https://developer.android.com/studio/publish/preparing', text:'Preparing for Release'},
          {url:'https://developer.android.com/studio/publish/versioning', text:'Versioning'},
          {url:'https://developer.android.com/distribute/google-play/console', text:'Play Console'},
          {url:'https://developer.android.com/distribute/google-play/quality', text:'Quality Guidelines'},
        ]}/>
      </div>
    </>
  )
}
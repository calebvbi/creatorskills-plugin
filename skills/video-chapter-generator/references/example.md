# Video Chapter Generator: timed and untimed inputs

## Example 1: supplied timed outline

**Input:** The creator says a 15-minute video has these verified edit boundaries: introduction 00:00, collecting 01:30, organizing 04:15, reviewing 08:30, doing 11:45, recap 13:30. No downloadable resource, year-specific discussion or zero-effort promise is supplied.

**Output:** Based on the creator-provided boundaries; the recording was not independently inspected.

```text
00:00 Introduction to GTD
01:30 Collecting tasks and commitments
04:15 Organizing the collected items
08:30 Reviewing the system
11:45 Doing the next task
13:30 Recap
```

**Checks:** Six ascending timestamps start at 00:00. All intervals, including the last 90 seconds to 15:00, exceed 10 seconds. Titles stay within the supplied topics. These checks validate the supplied outline, not unseen video content.

## Example 2: untimed partial excerpt

**Input:** “This is only the middle of my video. First I show how I label flour containers. Then I compare notes from two bakes. I don't have timestamps.”

**Output:** Partial outline from the supplied excerpt. Timing and the rest of the video are unknown.

```text
[timestamp needed] Labeling flour containers
[timestamp needed] Comparing notes from two bakes
```

Supply the time-aligned transcript or the verified boundaries from your edit to create a publishable chapter list. No introduction, ending or 00:00 anchor is inferred from the partial excerpt.

## Example 3: explicitly requested production estimate

**Input:** “My planned script has 700 spoken words. Estimate its duration at 140 words per minute, with one 20-second visual pause.”

**Output:** Estimated speech duration is 700 ÷ 140 = 5 minutes. Adding the planned 20-second pause gives an estimated total of 5 minutes 20 seconds. Actual duration needs a read-through and edit check. This estimate does not establish any source chapter boundary.

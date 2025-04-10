"use client";
import CreatePlan from "@/components/Subscribe/CreatePlanSection";
import HowItWorksBlack from "@/components/Subscribe/HowItWorksBlack";
import SubscriptionSection from "@/components/Subscribe/SubscriptionSection";

export default function Subscribe() {
  return (
    <div>
      <CreatePlan />
      <HowItWorksBlack />
      <SubscriptionSection />
    </div>
  );
}

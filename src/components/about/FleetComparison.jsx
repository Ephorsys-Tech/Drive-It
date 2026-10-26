import React from 'react';
import { Check, X, ShieldAlert, Sparkles } from 'lucide-react';

export default function FleetComparison() {
  const comparisons = [
    {
      feature: 'Total Privacy with Loved Ones',
      driveit: '100% Private (No stranger driver in vehicle)',
      taxi: 'Driver present at all times',
      win: true
    },
    {
      feature: 'Cost for Outstation Road Trips (Puri/Konark)',
      driveit: 'Fixed low daily rental (starts ₹1399/day)',
      taxi: 'Surge pricing, driver allowances, waiting charges',
      win: true
    },
    {
      feature: 'Freedom to Stop Anywhere',
      driveit: 'Stop at scenic spots, dhabas, beaches freely',
      taxi: 'Waiting fees charged every minute',
      win: true
    },
    {
      feature: 'Cleanliness & Sanitization',
      driveit: 'Deep vacuumed & sanitized before every delivery',
      taxi: 'Uncertain hygiene from previous passengers',
      win: true
    },
    {
      feature: 'Vehicle Choice & 4x4 Thrill',
      driveit: 'Exact car guaranteed (Thar, Scorpio-N, Brezza)',
      taxi: 'Random assigned cab based on availability',
      win: true
    },
    {
      feature: 'Airport Waiting & Cancellation',
      driveit: 'Car waiting at terminal regardless of flight delays',
      taxi: 'Driver cancellations, long taxi queues',
      win: true
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-reveal-scroll text-center mb-14">
          <span className="px-3.5 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
            Transparent Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            DriveIT Self Drive vs Ordinary Cabs
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            See why self-drive is the superior choice for vacationers, business travelers, and families in Odisha.
          </p>
        </div>

        {/* Table container */}
        <div className="reveal-on-scroll delay-150 bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950 text-white text-xs sm:text-sm">
                  <th className="py-5 px-6 font-bold">Feature / Experience</th>
                  <th className="py-5 px-6 font-bold bg-red-600 text-white">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      <span>DriveIT Self-Drive</span>
                    </span>
                  </th>
                  <th className="py-5 px-6 font-bold text-slate-400">Regular Taxis / Cabs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisons.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4.5 px-6 font-bold text-slate-900">
                      {item.feature}
                    </td>
                    <td className="py-4.5 px-6 bg-red-50/40 text-slate-900 font-semibold border-x border-red-100/50">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item.driveit}</span>
                      </div>
                    </td>
                    <td className="py-4.5 px-6 text-slate-500">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>{item.taxi}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
